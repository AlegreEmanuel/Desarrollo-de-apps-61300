import { StyleSheet, Text, Image,useWindowDimensions, Pressable } from "react-native";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductItem = ({product, navigation}) => {
    
    const [isPortrait, setIsPortrait] = useState(true)
    const [isLandscape,setIsLandscape] = useState(false)

    const{width, height} = useWindowDimensions();
    
    console.log(width,height)

    useEffect(()=> {
        if(height>width){
            setIsPortrait(true)
            setIsLandscape(false)
        }else{
            setIsPortrait(false)
            setIsLandscape(true)
        }
    },[width,height])

    return(
        <Pressable onPress={()=> navigation.navigate("ItemDetail", {id: product.id})}>
        <Card style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={width < 400 ? styles.textMin : styles.text}>{product.title}</Text>
        <Image style={styles.image} source={{ uri: product.images[0] }} />
        </Card>
        </Pressable>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    text:{
        width: '70%',
        fontSize: 30,
        fontFamily: 'Debil'
    },
    textMin:{
        width: '70%',
        fontSize: 20,
        fontFamily: 'Debil'
    },
    image: {
        minWidth:90,
        minHeight:90,

        borderColor: 'black', 
        borderWidth: 2,
        borderRadius: 15,
      }
});