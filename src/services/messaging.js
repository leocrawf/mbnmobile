import firestore from '@react-native-firebase/firestore';

export const createFirstMessage = async data => {
  return await firestore()
    .collection('messages')
    .add({
      user: {
        id: data.userId,
        name: data.name,
      },
      category: data.category,
      categoryId: data.categoryId,
      question: data.question,
      createdAt: firestore.Timestamp.fromDate(new Date()),
      // media: data.url || '',
    });
};

export const createMessages = async data => {
  return await firestore()
    .collection('messages')
    .doc(data.messageId)
    .collection('chat')
    .add({
      user: {
        id: data.userId,
        name: data.name,
      },
      content: data.content,
      createdAt: firestore.Timestamp.fromDate(new Date()),
      // media: data.url || '',
    });
};
