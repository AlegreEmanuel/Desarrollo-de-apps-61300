import React from "react";
import { Text, View, StyleSheet, Pressable, StatusBar } from "react-native";
import { colors } from "../global/colors";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { deleteSession } from "../db";
import StyleText from "./StyleText";

function Header({ title, showBackButton, navigation }) {
  const dispatch = useDispatch();
  const { localId, user } = useSelector((state) => state.authReducer.value);

  const SignOut = async () => {
    dispatch(logout());
    const deletedSession = await deleteSession({ localId });
  };

  const arrowColor = showBackButton ? 'white' : colors.blue_200 ;


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />

      <Pressable
        onPress={() => showBackButton && navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={30} color={arrowColor} />
      </Pressable>

      <View style={styles.titleContainer}>
        
        <StyleText strong>{title}</StyleText>
      </View>

      {user && (
        <Pressable onPress={SignOut} style={styles.logoutButton}>
          <Ionicons name="exit" size={24} color="white" />
        </Pressable>
      )}
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
    paddingVertical: 12,
    paddingTop: StatusBar.currentHeight || 0,
  },
  
  titleContainer: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
  },
  backButton: {
    marginRight: 16,
    marginLeft: 16,
  },
  logoutButton: {
    marginLeft: 16,
    marginRight: 16,
  },
});
