import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/auth/authSlice";



function Header({ title, showBackButton, navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.value.user);


  const SignOut = () => {
    dispatch(signOut());
  };


  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
      {user ? (
      <TouchableOpacity onPress={SignOut} style={styles.logoutButton}>
        <Ionicons name="exit" size={24} color="white" />
      </TouchableOpacity>):
      (null)
      }
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_200,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },

  text: {
    fontSize: 40,
    fontFamily: "Fuerte",
  },

  backButton: {
    position: "absolute",
    left: 16,
  },
  logoutButton: {
    position: "absolute",
    right: 16,
  },
});