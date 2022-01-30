import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/HomeScreen/Home';
import Communications from '../screens/Communications';
import Media from '../screens/Media';
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';

import COLORS from '../constants/colors';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Library'}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
        },
      }}>
      <Tab.Screen
        name={'Communicate'}
        component={Communications}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Media'}
        component={Media}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'playcircleo'} size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Library'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            // <View style={styles.middleButton}>
            <Ionicons name={'library-outline'} size={28} color={color} />
            // </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Contribute'}
        component={Chat}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'handshake-o'} size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-outline'} size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  middleButton: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 30,
    top: -25,
    elevation: 5,
  },
});

export default HomeBottomTabNavigator;
