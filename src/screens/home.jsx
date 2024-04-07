import React from "react";
import { View, StyleSheet } from "react-native";
import Categories from "../components/Categories";
import { colors } from "../global/colors";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Categories navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_400,
    flex: 1,
  },
});

export default Home;

