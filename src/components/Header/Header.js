import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import COLORS from '../../constants/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useSessionStore} from '../../store/';

export default function Header() {
  const {email} = useSessionStore(state => state.userSession);
  const name = email ? email.substring(0, email.lastIndexOf('@')) : 'User';

  return (
    <>
      <View style={styles.header}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerLeft}>Hello,</Text>
            <Text
              style={styles.headerRight}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {name}
            </Text>
          </View>
          {/* <Text style={styles.headerLower}>What do you want today</Text> */}
        </View>
        <Image
          source={require('../../../assets/images/person.png')}
          style={styles.profileIcon}
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="search" size={28} />
          <TextInput
            style={styles.filterInput}
            placeholder="Filter List"
            placeholderTextColor={COLORS.grey}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  headerLeft: {
    fontSize: 28,
    color: COLORS.darkGrey,
  },
  headerRight: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
    maxWidth: 190,
    color: COLORS.grey,
  },
  headerLower: {
    marginTop: 5,
    fontSize: 20,
    color: COLORS.darkGrey,
  },
  profileIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  searchContainer: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  filterInput: {
    color: COLORS.grey,
    width: '90%',
  },
});
