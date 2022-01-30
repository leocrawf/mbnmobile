import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const CustomInput = props => {
  const {placeholder, label, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // borderColor: '#e8e8e8',
    // borderWidth: 1,
    // borderRadius: 5,
    // paddingHorizontal: 10,
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    color: COLORS.dark,
    // paddingLeft: 10,
    // fontSize: 16,
  },
  error: {
    color: 'red',
    // fontSize: 16,
  },
  input: {
    backgroundColor: 'white',
    borderColor: COLORS.light,
    borderWidth: 1,
    borderRadius: 30,
    // fontSize: 16,
    paddingHorizontal: 10,
    marginVertical: 5,
    color: COLORS.grey,
  },
});

export default CustomInput;
