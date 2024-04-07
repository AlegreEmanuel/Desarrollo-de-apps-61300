import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/shop/cartSlice";
import { Ionicons } from '@expo/vector-icons';
import StyleText from './StyleText';
import allProducts from '../data/products.json'; 

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState(null);

  const findProductById = (productId) => {
    return allProducts.find(product => product.id === productId);
  };

  useEffect(() => {
    const productFound = findProductById(item.id);
    setProductDetail(productFound);
  }, [item.id]);

  const handleRemoveItem = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <View style={styles.container}>
      <View>
        {productDetail && (
          <>
            <StyleText strong color="black">{productDetail.title}</StyleText>
            <StyleText color="black">{'('+ productDetail.brand + ')'}</StyleText>
            <StyleText color="black">{`Price: $${productDetail.price && productDetail.price.toFixed(2)}`}</StyleText>
            <StyleText color="black">{`Quantity: ${item.quantity}`}</StyleText>
          </>
        )}
      </View>
      <View>
        <Pressable onPress={handleRemoveItem}>
          <Ionicons name="trash-sharp" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_200,
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: colors.blue_300,
    borderWidth: 2,
  },
});