import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../constants/colors';
import {createFirstMessage, createMessages} from '../../services/messaging';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {useSessionStore} from '../../store/';

const includeExtra = true;

const MessageInput = ({
  selectedCategoryId,
  categories,
  messageId,
  setCreatedMessageId,
}) => {
  const user = useSessionStore(state => state.userSession);
  const name = user.email.substring(0, user.email.lastIndexOf('@'));
  const userId = user.uid;
  const [message, setMessage] = useState('');
  const [newMessageId, setNewMessageId] = useState(messageId);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const sendMessage = async () => {
    // send message
    if (!newMessageId) {
      const messageRef = await createFirstMessage({
        userId: userId,
        name: name,
        category: categories[selectedCategoryId].name,
        categoryId: selectedCategoryId,
        question: message,
      });

      await createMessages({
        messageId: messageRef.id,
        userId: userId,
        name: name,
        category: categories[selectedCategoryId].name,
        categoryId: selectedCategoryId,
        content: message,
      });

      setNewMessageId(messageRef.id);
      setCreatedMessageId(messageRef.id);
    } else {
      await createMessages({
        messageId: newMessageId,
        userId: userId,
        name: name,
        category: categories[selectedCategoryId].name,
        categoryId: selectedCategoryId,
        content: message,
      });
    }

    setMessage('');
    Keyboard.dismiss();
  };

  const onPlusClicked = () => {
    // console.warn('On plus clicked');
    return;
  };

  // Image picker
  const pickerOptions = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  };

  const pickImage = () => {
    const result = launchImageLibrary(pickerOptions, setImage);
    console.log('picker response: ', image);
  };

  const takePhoto = async () => {
    const result = await launchCamera();
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="enter text..."
          placeholderTextColor={COLORS.grey}
        />

        <Pressable onPress={pickImage}>
          <Feather name="image" size={24} color="#595959" style={styles.icon} />
        </Pressable>

        <Pressable onPress={takePhoto}>
          <Feather
            name="camera"
            size={24}
            color="#595959"
            style={styles.icon}
          />
        </Pressable>
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <Ionicons
            name="send"
            size={18}
            color="white"
            style={styles.sendIcon}
          />
        ) : (
          <AntDesign name="plus" size={24} color="white" />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  inputContainer: {
    backgroundColor: COLORS.lightPlus,
    flex: 1,
    marginRight: 10,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#dedede',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    color: COLORS.dark,
  },
  icon: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#3777f0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
  },
  sendIcon: {
    marginLeft: 4,
  },
});
