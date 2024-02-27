import { Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";  
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({category, navigation}) => {
    const dispatch = useDispatch();
    const{width} = useWindowDimensions();

  return (
        <Card style={{ borderBlockColor: 'black' }}>
      <Pressable onPress={() => {
        dispatch(setCategorySelected(category));
        navigation.navigate("ItemListCategory", { category });
      }}
       >
            <Text style={width < 400 ? styles.textMin : styles.text}>{category}</Text>
      </Pressable>
        </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: 'Debil'
  },
  textMin:{
    fontSize: 20,
    fontFamily: 'Debil',
  }
  
});