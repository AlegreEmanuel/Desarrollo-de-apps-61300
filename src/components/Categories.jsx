import { FlatList, Text, View } from "react-native";
import categories from '../data/Categories.json';
import CategoryItem from "./CategoryItem";

function Categories({setCategorySelected}) {
    return(
        <View>

            <FlatList style={{marginTop: 20}}
                data={categories}
                renderItem={({item}) => <CategoryItem setCategorySelected={setCategorySelected} category={item}/>}
                keyExtractor={(category)=> category}

            />

        </View>
    );
}

export default Categories;