import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';

export default function Profile() {
  const navigation = useNavigation();

  const onSignOutPress = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('SignIn');
      })
      .catch(error => {});
  };

  return (
    <View>
      <Text>Profile</Text>
      <CustomButton text="Sign Out" onPress={onSignOutPress} type="TERTIARY" />
    </View>
  );
}
