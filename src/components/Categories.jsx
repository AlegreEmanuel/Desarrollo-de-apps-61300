import { FlatList, View } from "react-native";
import categories from '../data/Categories.json';
import CategoryItem from "./CategoryItem";

function Categories({navigation}) {
    return(
        <View>

            <FlatList style={{marginTop: 20}}
                data={categories}
                renderItem={({item}) => <CategoryItem navigation={navigation} category={item}/>}
                keyExtractor={(category)=> category}

            />

        </View>
    );
}

export default Categories;