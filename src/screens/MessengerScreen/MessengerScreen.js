import React, {useState, useEffect, useRef} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {useRoute, useNavigation} from '@react-navigation/native';
import Message from '../../components/Message';
import MessageInput from '../../components/MessageInput';
import CategoriesText from '../../components/CategoriesText';
import categoriesList from '../../constants/categoriesList';
// import {getMessages} from '../../services/messaging';
import COLORS from '../../constants/colors';

import firestore from '@react-native-firebase/firestore';

// import moment from 'moment';
const white = COLORS.white;

const MessengerScreen = ({route, navigation}) => {
  const {messageId, category, question, createdAt} = route.params;

  const flatlistRef = useRef();
  const [chatMessages, setChatMessages] = useState([]);
  const [selected, setSelected] = useState(0);
  const [createdMessageId, setCreatedMessageId] = useState(messageId);

  useEffect(() => {
    const unsub = firestore()
      .collection('messages')
      .doc(createdMessageId)
      .collection('chat')
      .orderBy('createdAt', 'asc')
      .onSnapshot(
        querySnapshot => {
          let msgs = [];
          querySnapshot.docs.map(doc => {
            msgs.push(doc.data());
          });
          setChatMessages(msgs);
          flatlistRef.current.scrollToEnd({animating: true});
        },
        error => {
          console.log('messageScreen error: ', error);
        },
      );

    return () => unsub();
  }, [createdMessageId]);

  // const time = moment(createdAt).from(moment());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={28}
          color={white}
          onPress={navigation.goBack}
        />
        <Text style={styles.backIconText} numberOfLines={1}>
          {!category ? 'New Issue' : category}
        </Text>
        <Text style={styles.spacer} />
      </View>
      <FlatList
        ref={flatlistRef}
        style={styles.flatListHolder}
        data={chatMessages}
        renderItem={({item}) => <Message message={item} />}
        // inverted
      />
      <View style={styles.messageControls}>
        {!messageId ? (
          <CategoriesText
            categories={categoriesList.messageCategories}
            setSelected={setSelected}
          />
        ) : null}
        <MessageInput
          selectedCategoryId={selected}
          categories={categoriesList.messageCategories}
          messageId={createdMessageId}
          setCreatedMessageId={setCreatedMessageId}
        />
      </View>
    </SafeAreaView>
  );
};

export default MessengerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#3B71F3',
  },
  spacer: {
    width: 28,
  },
  backIconText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: COLORS.white,
  },
  flatListHolder: {
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  messageControls: {
    maxHeight: 95,
  },
});
