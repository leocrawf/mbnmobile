import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
// import SocialSignInButtons from '../../components/SocialSignInButtons';
import COLORS from '../../constants/colors';

import {useNavigation} from '@react-navigation/core';
import {register} from '../../services/auth';
import {Formik} from 'formik';
import * as Yup from 'yup';

import auth from '@react-native-firebase/auth';

const validationSchema = Yup.object({
  cino: Yup.string().trim().min(6, 'Invalid CINO!'),
  email: Yup.string()
    .email('Invalid email!')
    .required('This field is required!'),
  password: Yup.string()
    .trim('Invalid email!')
    .min(6, 'Password is too short!')
    .required('This field is required!'),
  passwordRepeat: Yup.string()
    .equals([Yup.ref('password'), null], 'Passwords do not match!')
    .required('This field is required!'),
});

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        //https://firebase.google.com/docs/reference/js/firebase.User
        navigation.navigate('Home');
      }
    });

    return unsubscribe;
  });

  const userInfo = {
    cino: '',
    email: '',
    password: '',
    passwordRepeat: '',
  };

  const signUp = async (values, formikActions) => {
    setError('');
    const res = await register(values.email, values.password, values.cino);

    if (!res.code) {
      formikActions.resetForm();
      formikActions.setSubmitting(false);
    } else {
      setError(`Error: ${res.code}`);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={signUp}>
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const {cino, email, password, passwordRepeat} = values;

            return (
              <>
                <CustomInput
                  label="Cadet Identification Number (CINO)"
                  autoComplete="off"
                  autoCapitalize="none"
                  placeholderTextColor={COLORS.grey}
                  //textColor={COLORS.grey}
                  placeholder="123456"
                  value={cino}
                  onChangeText={handleChange('cino')}
                  error={touched.cino && errors.cino}
                  onBlur={handleBlur('cino')}
                />
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
                <CustomInput
                  label="Repeat Password"
                  autoComplete="off"
                  autoCapitalize="none"
                  placeholderTextColor={COLORS.grey}
                  //textColor={COLORS.grey}
                  placeholder="******"
                  value={passwordRepeat}
                  onChangeText={handleChange('passwordRepeat')}
                  error={touched.passwordRepeat && errors.passwordRepeat}
                  onBlur={handleBlur('passwordRepeat')}
                  secureTextEntry
                />

                {error ? <Text style={styles.error}>{error}</Text> : null}

                <CustomButton
                  text="Register"
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                />
              </>
            );
          }}
        </Formik>

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        {/* <SocialSignInButtons /> */}

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  error: {
    color: 'red',
  },
});

export default SignUpScreen;
