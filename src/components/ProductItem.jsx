import { StyleSheet, Text } from "react-native";
import Card from "./Card";

const ProductItem = ({product}) => {
    
    return(
        <Card style={{borderBlockColor: 'black'}}>
        <Text style={styles.text}>{product.title}</Text>
        </Card>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        fontFamily: 'Debil'
    }
});