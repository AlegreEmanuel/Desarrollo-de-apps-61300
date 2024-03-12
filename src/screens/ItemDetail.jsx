import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from '../data/products.json';
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shop/cartSlice";

const ItemDetail = ({navigation, route}) => {
  const [product, setProduct] = useState(null);

  const {id} = route.params;

  const dispatch = useDispatch()
  const onAddCart= ()=>{
    dispatch(addItem({...product, quantity:1}))
  }

  useEffect(() => {
    const productFound = allProducts.find((product) => product.id === id);
    setProduct(productFound);
  }, [id]);

  return product ? (
    <View style={styles.container}>

            <View style={styles.container2}>
            <View style={styles.container3}>
                <View>
                <Text style={styles.category}>Categoria: {product.category}</Text>
                <Text style={styles.description}><strong>Descripción:</strong> {product.description}</Text>
                <Text style={styles.rating}>{`Rating: ${product.rating}/5`}</Text>
                </View>
                <View>
                <Image style={styles.image} source={{ uri: product.images[0] }} />
                </View>
                <Text style={styles.price}>{`Price: $${product.price}`}</Text>
                <Pressable onPress={onAddCart}>
                <Text style={styles.price}>Add to cart</Text>
                </Pressable>

            </View>
      </View>
    </View>
  ) : (
    <Text> Cargando </Text>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_100,
  },
  container2:{
    borderColor: 'black',
    borderWidth: 5, 
    borderRadius: 10,
    maxWidth:500, 
    marginHorizontal: 'auto', 
    marginVertical: 'auto',
    backgroundColor: colors.blue_200
  },

  container3: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: '5%',
    alignItems: 'center',
    marginBottom: 10,
    maxWidth: '100%'
    
  },
  title: {
    fontSize: 30,
    fontFamily: 'Debil',
    color: 'white',
  },
  category: {
    fontSize: 28,
    fontFamily: 'Fuerte',
    marginBottom: 3,
  },
  rating: {
    fontFamily: 'Debil',
    fontSize: 20,
    marginBottom: 8,
  },
 
  image: {
    aspectRatio: 1,
    height: 300,
    width: 300,
    resizeMode: 'cover',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 2
  },

  description: {
    fontFamily: 'Debil',
    fontSize: 26,
    marginBottom: 3,
  },
  price: {
    textAlign: 'center',
    fontFamily: 'Debil',
    fontSize: 30,
    fontWeight: 'bold',
  },

});