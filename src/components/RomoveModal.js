import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

const RemoveModal = ({ modalVisible, RemoveItem, setModalVisible }) => {
  return (
    <Modal animationType="fade" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>
          ¿Seguro quieres matar al producto? Tiene familia!!!
        </Text>
        <Pressable onPress={RemoveItem}>
          <Text style={styles.button}>Sí, mátalo ahora</Text>
        </Pressable>
        <Pressable onPress={() => setModalVisible(false)}>
          <Text style={styles.button}>No, tiene mi perdón</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalText: {
    fontSize: 45,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Cochin",
  },
  button: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "darkred",
    color: "white",
    shadowColor: "black", 
    shadowOpacity: 1, 
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 }, 
    width: 200,
  },
});

export default RemoveModal;