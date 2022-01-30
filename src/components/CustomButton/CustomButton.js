import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import COLORS from '../../constants/colors';

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
  submitting,
}) => {
  return (
    <Pressable
      onPress={!submitting ? onPress : null}
      style={[
        styles.container,
        styles[`container_${type}`],
        submitting
          ? {backgroundColor: COLORS.light}
          : !submitting && bgColor
          ? {backgroundColor: bgColor}
          : {},
      ]}>
      <View style={styles.buttonDetails}>
        {submitting && <ActivityIndicator color={COLORS.grey} />}
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : submitting ? {color: COLORS.grey} : {},
          ]}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },

  text_SECONDARY: {
    color: '#3B71F3',
    fontSize: 16,
  },

  text_TERTIARY: {
    color: 'gray',
    fontSize: 16,
  },
});

export default CustomButton;
