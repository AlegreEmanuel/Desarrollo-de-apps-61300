import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ItemListCategory from "../screens/ItemListCategory";
import ItemDetail from "../screens/ItemDetail";
import Header from "../components/Header";
import allProducts from '../data/products.json';

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          header: () => (
            <Header
              title={
                route.name === "Home"
                  ? "Categorias"
                  : route.name === "ItemListCategory"
                  ? route.params.category
                  : allProducts.find((product) => product.id === route.params.id)?.title || "Detail"
              }
              showBackButton={route.name !== "Home"}
              navigation={navigation}
            />
          ),
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;