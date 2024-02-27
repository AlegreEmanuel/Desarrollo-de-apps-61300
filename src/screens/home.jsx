import { View } from "react-native";
import Categories from "../components/Categories";
import { colors } from "../global/colors";



function Home({ navigation }) {
    return (
        <View style={{ backgroundColor: colors.blue_400, flex:1 }}>
          <Categories navigation={navigation} />
        </View>
    );
  }
  
  export default Home;




