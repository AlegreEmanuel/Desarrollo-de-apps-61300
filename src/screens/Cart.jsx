import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CartItems from "../components/CartItem";
import { colors } from "../global/colors";
import { useSelector, useDispatch } from "react-redux";
import { usePostOrderMutation } from "../services/ShopService";
import SubmitButton from "../components/submitButton";
import { useNavigation } from "@react-navigation/native";
import { confirmCart } from "../features/shop/cartSlice";
import StyleText from "../components/StyleText";

const Cart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const user = useSelector((state) => state.authReducer.value.user);

  const [triggerPost, result] = usePostOrderMutation();

  const confirmCartAndSetOrders = async () => {
    await triggerPost({ total, cartItems, user, orderDate: new Date().toLocaleString() });
    dispatch(confirmCart()); 
    navigation.navigate('OrdersTab'); 
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItems item={item} />}
            keyExtractor={(cartItem) => cartItem.id.toString()}
          />
          <View style={styles.totalContainer}>
            <StyleText strong>{`Total: $${total}`}</StyleText>
            <SubmitButton title={"Confirm"} onPress={confirmCartAndSetOrders} />
          </View>
        </>
      ) : (
        <StyleText>No Hay Productos agregados</StyleText>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_200,
    padding: 16,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});
