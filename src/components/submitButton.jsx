import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../global/colors';

const SubmitButton = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.blue_300,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, 
    fontFamily: 'Debil'
  },

  buttonText: {
    color: 'white', 
    fontSize: 24,
    fontFamily: 'Debil'
  },
});

export default SubmitButton;
