import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import allProducts from '../data/products.json';
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shop/cartSlice";
import SubmitButton from "../components/submitButton";
import StyleText from "../components/StyleText"; 

const ItemDetail = ({ navigation, route }) => {
  const [productDetail, setProductDetail] = useState(null); 

  const { id } = route.params;

  const dispatch = useDispatch();
  const onAddCart = () => {
    dispatch(addItem({ ...productDetail, quantity: 1 }));
    navigation.goBack();
  };

  useEffect(() => {
    const productFound = allProducts.find((product) => product.id === id);
    setProductDetail(productFound); 
  }, [id]);

  return productDetail ? (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.contentContainer}>
          <StyleText strong >Categoria: {productDetail.category}</StyleText>
          <StyleText>Description: {productDetail.description}</StyleText>
          <StyleText>Rating: {productDetail.rating}/5</StyleText>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: productDetail.images[0] }} />
        </View>
        <View style={styles.priceContainer}>
          <StyleText strong >{`Price: $${productDetail.price}`}</StyleText>
          <SubmitButton onPress={onAddCart} title={"Add to Cart"} />
        </View>
      </View>
    </View>
  ) : (
    <StyleText strong> Cargando </StyleText>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_100,
    marginTop: 30,
    alignItems: 'center',
  },
  container2:{
    borderWidth: 5, 
    borderRadius: 10, 
    width: '90%',
    backgroundColor: colors.blue_200,
    padding: 10,
  },
  contentContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});