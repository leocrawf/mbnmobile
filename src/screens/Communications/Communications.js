import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import NoRecord from '../../components/NoRecord';
import ChatList from '../../components/ChatList';
import categories from '../../constants/categories';
import {useNavigation} from '@react-navigation/core';

import {useSessionStore} from '../../store/';

import firestore from '@react-native-firebase/firestore';
import CustomButton from '../../components/CustomButton';

export default function Communications() {
  const {uid} = useSessionStore(state => state.userSession);

  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(0);
  const [messages, setMessages] = useState([]);
  const noRecordItems = categories.Communications[selected];
  const navigation = useNavigation();
  const startAction = () => {
    navigation.navigate(
      noRecordItems.startAction.navigateTo,
      noRecordItems.startActionParams,
    );
  };

  const onPress = () => {
    navigation.navigate('MessengerScreen', {
      messageId: null,
      category: null,
      question: null,
      createdAt: null,
    });
  };

  useEffect(() => {
    const unsub = firestore()
      .collection('messages')
      .where('user.id', '==', uid) // admins will not have this.
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        querySnapshot => {
          let msgs = [];
          querySnapshot.docs.map(doc => {
            msgs.push({id: doc.id, ...doc.data()});
          });
          setMessages(msgs);
          setIsLoading(false);
        },
        error => {
          console.log('communications screen message error: ', error);
        },
      );

    return () => unsub();
  }, [uid]);

  return (
    <>
      <Header />
      <View>
        <Categories
          categories={categories.Communications}
          setSelected={setSelected}
        />
      </View>
      {isLoading && <ActivityIndicator />}
      {messages.length === 0 ? (
        <NoRecord
          iconProvider={noRecordItems.noRecord.iconProvider}
          icon={noRecordItems.noRecord.icon}
          noRecordTitle={noRecordItems.noRecord.noRecordTitle}
          noRecordMessage={noRecordItems.noRecord.noRecordMessage}
          newRecordButtonText={noRecordItems.noRecord.newRecordButtonText}
          onPress={startAction}
        />
      ) : (
        <>
          {selected === 0 && (
            <>
              <FlatList
                style={styles.flatListHolder}
                data={messages}
                renderItem={({item}) => <ChatList chatRoom={item} />}
              />
              <View style={styles.customButtonWrapper}>
                <CustomButton
                  text="New Message"
                  // submitting={isSubmitting}
                  onPress={onPress}
                />
              </View>
            </>
          )}
          {selected === 1 && (
            <NoRecord
              iconProvider={noRecordItems.noRecord.iconProvider}
              icon={noRecordItems.noRecord.icon}
              noRecordTitle={noRecordItems.noRecord.noRecordTitle}
              noRecordMessage={noRecordItems.noRecord.noRecordMessage}
              newRecordButtonText={noRecordItems.noRecord.newRecordButtonText}
              onPress={startAction}
            />
          )}
          {selected === 2 && (
            <NoRecord
              iconProvider={noRecordItems.noRecord.iconProvider}
              icon={noRecordItems.noRecord.icon}
              noRecordTitle={noRecordItems.noRecord.noRecordTitle}
              noRecordMessage={noRecordItems.noRecord.noRecordMessage}
              newRecordButtonText={noRecordItems.noRecord.newRecordButtonText}
              onPress={startAction}
            />
          )}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  backIconText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatListHolder: {
    paddingHorizontal: 10,
    // backgroundColor: 'red',
  },
  customButtonWrapper: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
