import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../constants/colors';
import {useSessionStore} from '../../store/';

const blue = COLORS.secondary;
const grey = COLORS.grey;

const Message = ({message}) => {
  const {uid} = useSessionStore(state => state.userSession);
  const myID = uid;
  const isMe = message.user.id === myID;

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}>
      <Text style={isMe ? styles.whiteText : styles.whiteText}>
        {message.content}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  leftContainer: {
    backgroundColor: blue,
    marginLeft: 10,
    marginRight: 'auto',
  },
  rightContainer: {
    backgroundColor: grey,
    marginLeft: 'auto',
    marginRight: 10,
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
});
