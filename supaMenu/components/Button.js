
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, onPress, variant, style }) => {
  const buttonStyles = [
    styles.button,
    variant === 'success' ? styles.successButton : styles.defaultButton,
    variant === 'default' ? styles.defaultButton : styles.successButton,
  ];
  

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    textDecorationColor:'black',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  defaultButton: {
    backgroundColor: '#ffffff',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 3
  },
  successButton: {
    backgroundColor: '#e68a00',
  },
  defaultButtonText: {
  color: 'black', // Set text color to black
  fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Button;
