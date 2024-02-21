import { View } from "react-native";
import Categories from "../components/Categories";
import { colors } from "../global/colors";



function Home({navigation}) {
    return (
        <View style={{ flex: 1}}>
        <View  style={{backgroundColor: colors.blue_400 }}>
            <Categories navigation = {navigation}/>
        </View>
        </View>
    );
  }
  
  export default Home;




