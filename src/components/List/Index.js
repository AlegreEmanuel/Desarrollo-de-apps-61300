import React from "react";
import { FlatList, View, Text, Image, Pressable, StyleSheet, Dimensions } from "react-native";

const Index = ({ cartItems, handleModal }) => {
  return (
    <FlatList
      style={styles.flatList}
      data={cartItems}
      renderItem={({ item }) => (
        <View style={styles.itemContainer} key={item.id}>
          <Text style={styles.producto}>{item.name}</Text>
          <Pressable onPress={() => handleModal(item.id)} style={styles.iconContainer}>
            <Image style={styles.icon} source={{ uri: 'https://purepng.com/public/uploads/large/purepng.com-skullsskullhuman-skullskeleton-skullbrain-holderclipartheadgrunge-14215269711410cptf.png' }} />
          </Pressable>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};


const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    minWidth: 250,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 8,
    borderRadius: 8,
    padding: 10,
    alignSelf: 'center',
    minWidth: 200,
  },
  producto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: 'black', 
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: 'silver', 
  },
});

export default Index;