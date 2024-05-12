import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, style, ...rest }) => {
  return (
    <RNTextInput
      placeholder={placeholder}
      style={styles.input}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    textShadowColor:'white',
    marginBottom: 10,
    color: 'white',
  },
});

export default TextInput;
