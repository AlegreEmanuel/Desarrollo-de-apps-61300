import { FlatList, View, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import { useGetCategoriesQuery } from "../services/ShopService";

function Categories({ navigation }) {
  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <View style={styles.container}>
      
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={({ item }) => <CategoryItem navigation={navigation} category={item} />}
        keyExtractor={(category) => category}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  counter: {
    marginBottom: 10,
  },
  flatList: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});