import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { colors } from "../global/colors";



function Home({ setCategorySelected }) {
    return (
        <View style={{ flex: 1}}>
        <View  style={{backgroundColor: colors.blue_400 }}>
            <Header title={'Inicio'} />
            <Categories setCategorySelected={setCategorySelected} />
        </View>
        </View>
    );
  }
  
  export default Home;




