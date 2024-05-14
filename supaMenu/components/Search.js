import React from 'react';
import { TextInput as RNTextInput, StyleSheet, Dimensions } from 'react-native';
const Search = ({ placeholder, style, ...rest }) => {
  return (
    <RNTextInput
      placeholder={placeholder}
      style={styles.input}
      {...rest}
    />
  );
};
const screenWidth = Dimensions.get('window').width;
const inputWidth = screenWidth * 0.8; 
const styles = StyleSheet.create({
  input: {
    width: inputWidth,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal:20,
    backgroundColor: 'white',
  },
});

export default Search;
