import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";
import Counter from "./counter";
import { useSelector } from "react-redux";


function Categories({ navigation }) {
    const categories = useSelector((state) => state.shopReducer.value.category);
  
    return (
      <View style={{ marginTop: 20, flex: 1 }}>
        <Counter />
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryItem navigation={navigation} category={item} />}
          keyExtractor={(category) => category}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

export default Categories;