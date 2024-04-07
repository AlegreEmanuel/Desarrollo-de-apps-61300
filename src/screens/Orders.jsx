import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch } from "react-redux"; 
import { setOrders } from "../features/shop/cartSlice";
import { useGetOrdersQuery } from "../services/ShopService";
import OrdersItem from "../components/OrdersItem";
import { colors } from "../global/colors";

const Orders = () => {
  const dispatch = useDispatch();
  const { data: orders, isLoading, error } = useGetOrdersQuery();


    //NO FUNCIONA------------------------------------

  useEffect(() => {
    if (orders) {
      const ordersArray = Object.values(orders);
      dispatch(setOrders(ordersArray));
    }
  }, [orders, dispatch]);

  if (isLoading) {
    return <Text>Cargando órdenes...</Text>;
  }

  if (error) {
    return <Text>Error al cargar las órdenes.</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
  data={orders}
  renderItem={({ item }) => {
    console.log("Datos de la orden a pasar a OrdersItem:", item);
    return <OrdersItem order={item} />;
  }}
  keyExtractor={(item, index) => index.toString()}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_200,
    padding: 16,
  },
});

export default Orders;
