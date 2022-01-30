import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import moment from 'moment';
import COLORS from '../../constants/colors';

const ChatList = ({chatRoom}) => {
  const navigation = useNavigation();

  const getFirstLetter = text => {
    return text.charAt(0);
  };

  const onPress = () => {
    navigation.navigate('MessengerScreen', {
      messageId: chatRoom.id,
      category: chatRoom.category,
      question: chatRoom.question,
      createdAt: chatRoom.createdAt,
    });
  };

  const time = moment(chatRoom?.createdAt).from(moment());

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.firstLetterHolder}>
        <Text style={styles.firstLetter}>
          {getFirstLetter(chatRoom.question)}
        </Text>
      </View>

      {!!chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.category}>{chatRoom.category}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.question}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  firstLetterHolder: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'blue',
  },
  firstLetter: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
  },
  badgeContainer: {
    backgroundColor: '#3777f0',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 3,
    marginRight: 10,
    color: COLORS.darkGrey,
  },
  text: {
    color: 'grey',
    fontSize: 11,
  },
});
