
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, onPress, variant }) => {
  const buttonStyles = [
    styles.button,
    variant === 'success' ? styles.successButton : styles.defaultButton,
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
    alignItems: 'center',
  },
  defaultButton: {
    backgroundColor: '#e68a00',
  },
  successButton: {
    backgroundColor: '#e68a00',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Button;
