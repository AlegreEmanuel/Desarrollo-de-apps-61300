import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";


const CategoryItem = ({category, setCategorySelected }) => {
    return (
        <Card style={{ borderBlockColor: 'black' }}>
            <Pressable onPress={() => {
                category && setCategorySelected(category);
            }}>
                <Text style={styles.text}>{category}</Text>
            </Pressable>
        </Card>
    );
};



export default CategoryItem;

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        fontFamily: 'Debil'
    }
});