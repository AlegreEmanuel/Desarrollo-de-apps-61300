import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../screens/MyProfile";
import Header from "../components/Header"; 
import imageSelector from "../screens/imageSelector";
import LocationSelector from "../screens/LocationSelector";
import LocationMiddleScreen from "../screens/LocationMiddleScreen";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
    
      screenOptions={({ route, navigation }) => ({
        header: () => (
          <Header
            title={
              route.name === "My Profile"
                ? "My Profile"
                : route.name === "Image Selector"
                ? "Image Selector"
                : "Default Title" 
            }
            showBackButton={route.name !== "My Profile"}
            navigation={navigation}
            
          />
        ),
      })}
    >
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Image Selector" component={imageSelector} />
      <Stack.Screen name="LocationMiddleScreen" component={LocationMiddleScreen} />
      <Stack.Screen name="Location Selector" component={LocationSelector} />






    </Stack.Navigator>
  );
};

export default MyProfileStack;