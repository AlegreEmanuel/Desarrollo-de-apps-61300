import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={125} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue_100
  },
});

export default Loading;