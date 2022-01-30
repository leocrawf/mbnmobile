import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import COLORS from '../../constants/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../CustomButton';

const NoRecord = ({
  iconProvider,
  icon,
  noRecordTitle,
  noRecordMessage,
  newRecordButtonText,
  onPress,
  isSubmitting,
}) => {
  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.iconHolder}>
        {iconProvider === 'AntDesign' && (
          <AntDesign name={icon} size={100} color={COLORS.grey} />
        )}
        {iconProvider === 'MaterialCommunityIcons' && (
          <MaterialCommunityIcons name={icon} size={100} color={COLORS.grey} />
        )}
        {iconProvider === 'FontAwesome' && (
          <FontAwesome name={icon} size={100} color={COLORS.grey} />
        )}
        {iconProvider === 'FontAwesome5' && (
          <FontAwesome5 name={icon} size={100} color={COLORS.grey} />
        )}
        {iconProvider === 'Ionicons' && (
          <Ionicons name={icon} size={100} color={COLORS.grey} />
        )}
      </View>
      <View style={styles.lowerPage}>
        <Text style={styles.noRecordTitle}>{noRecordTitle}</Text>
        <Text style={styles.noRecordMessage}>{noRecordMessage}</Text>
        {newRecordButtonText !== '' && (
          <CustomButton
            text={newRecordButtonText}
            // submitting={isSubmitting}
            onPress={onPress}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  iconHolder: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerPage: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    height: '60%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noRecordTitle: {
    fontSize: 25,
  },
  noRecordMessage: {
    fontSize: 13,
    width: '90%',
    textAlign: 'center',
  },
});

export default NoRecord;
