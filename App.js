import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import RemoveModal from './src/components/RomoveModal';
import AddItem from './src/components/AddItem';
import Index from './src/components/List/Index';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSaved, setItemSaved] = useState(null);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSaved(id);
  };

  const RemoveItem = () => {
    const filteredArray = cartItems.filter((item) => item.id !== itemSaved);
    setCartItems(filteredArray);
    setModalVisible(false);
  };

  return (
    <View style={styles.BigContainer}>
      <RemoveModal
        modalVisible={modalVisible}
        RemoveItem={RemoveItem}
        setModalVisible={setModalVisible}
      />
      <View style={styles.container1}>
        <View style={styles.containerImage}>
          <Text style={styles.title}>¿Qué se gurdará en el "Cofre Misterioso"?</Text>
          <Image style={styles.image} source={{uri:'https://purepng.com/public/uploads/large/purepng.com-treasure-boxbox-object-old-treasure-chest-woodobjectstreasure-box-631522325914kbgkl.png',}} />
        </View>

        <AddItem setCartItems={setCartItems} cartItems={cartItems} />

        <View style={{ height: 450, marginTop: 50 }}>
          <Index cartItems={cartItems} handleModal={handleModal} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgray',
  },

  container1: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 15,
    padding: 20,
    width: '95%',
    height: '90%',
  },

  containerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },

  image: {
    width: 200,
    height: 200,
  },
  
});