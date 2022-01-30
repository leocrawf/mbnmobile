import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Text,
  LogBox,
} from 'react-native';
import Logo from '../../../assets/images/BattalionLogo1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import COLORS from '../../constants/colors';

// import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

import {login} from '../../services/auth';
import {Formik} from 'formik';
import * as Yup from 'yup';

import auth from '@react-native-firebase/auth';

import {useSessionStore} from '../../store/';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email!')
    .required('This field is required!'),
  password: Yup.string()
    .trim('Invalid email!')
    .required('This field is required!'),
});

const SignInScreen = () => {
  const session = useSessionStore(state => state.setSession);

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const [error, setError] = useState('');

  useEffect(() => {
    LogBox.ignoreLogs([
      "Got a component with the name 'index' for the screen 'Home'. React Components must start with an uppercase letter. If you're passing a regular function and not a component, pass it as children to 'Screen' instead. Otherwise capitalize your component's name.",
    ]);
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        // console.log("sign in details:", user);
        //https://firebase.google.com/docs/reference/js/firebase.User
        session(user);
        navigation.navigate('Home');
      }
    });
    return unsubscribe;
  });

  const userInfo = {
    email: '',
    password: '',
  };

  const signIn = async (values, formikActions) => {
    setError('');
    const res = await login(values.email, values.password);

    if (!res.code) {
      navigation.navigate('Home');
      formikActions.resetForm();
      formikActions.setSubmitting(false);
    } else {
      setError(`Error: ${res.code}`);
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={signIn}>
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const {email, password} = values;

            return (
              <>
                <CustomInput
                  label="Email"
                  autoComplete="email"
                  autoCapitalize="none"
                  placeholderTextColor={COLORS.grey}
                  //textColor={COLORS.grey}
                  placeholder="example@email.com"
                  value={email}
                  onChangeText={handleChange('email')}
                  error={touched.email && errors.email}
                  onBlur={handleBlur('email')}
                />
                <CustomInput
                  label="Password"
                  autoComplete="off"
                  autoCapitalize="none"
                  placeholderTextColor={COLORS.grey}
                  //textColor={COLORS.grey}
                  placeholder="******"
                  value={password}
                  onChangeText={handleChange('password')}
                  error={touched.password && errors.password}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                />

                {error ? <Text style={styles.error}>{error}</Text> : null}

                <CustomButton
                  text="Sign in"
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                />
              </>
            );
          }}
        </Formik>

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        {/* <SocialSignInButtons /> */}

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  error: {
    color: 'red',
  },
});

export default SignInScreen;
