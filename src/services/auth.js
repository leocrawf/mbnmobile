import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const register = (email, password, cino) => {
  return checkCino(cino).then(querySnapshot => {
    if (querySnapshot.size > 0) {
      return {
        code: 'CINO-code-already-registered!',
        message: 'CINO-code-already-registered!',
      };
    } else {
      return doRegistration(email, password, cino);
    }
  });
};

const checkCino = async cino => {
  const userRef = firestore().collection('users').where('cino', '==', cino);
  return await userRef.get();
};

const doRegistration = (email, password, cino) => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      //create additional record for user in users collection
      if (cino) {
        firestore().collection('users').doc(userCredential.user.uid).set({
          cino: cino,
        });
      }

      return userCredential;
    })
    .catch(error => {
      return {code: error.code, message: error.message};
    });
};

// login functions
export const login = (email, password) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      return userCredential;
    })
    .catch(error => {
      return {code: error.code, message: error.message};
    });
};
