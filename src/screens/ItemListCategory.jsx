import { View,FlatList, StyleSheet } from "react-native";
import Allproducts from "../data/products.json"
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";


const ItemListCategory = ({navigation, route }) => {

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")

    const {category} = route.params


    useEffect (() => {
        if(category){
            const products = Allproducts.filter(product =>
                product.category === category &&
                product.title.toLowerCase().includes(keyword.toLowerCase())
            );
            setProducts(products);
        }else{
            const productsFiltered = Allproducts.filter(product =>
                product.title.toLowerCase().includes(keyword.toLowerCase())
            );
            setProducts(productsFiltered);
        }
    }, [category, keyword])


        return(
            <View style={{flex:1, backgroundColor: colors.blue_200}}>
                
                <View style={styles.header}>
                <Search keyword={keyword} onSearch={setKeyword}/>
                </View>
                <FlatList style={{marginTop: 30}}
                data={products}
                renderItem={({item})=> <ProductItem product={item} navigation={navigation}/>}
                keyExtractor={(item)=> item.id}
                />
                
                
            </View>
        )
}

export default ItemListCategory;

const styles = StyleSheet.create({
    header:{
        fontSize: 30,
        flexDirection: 'row',
        backgroundColor: colors.blue_400,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '2%',
        height: '7%',

        


    
    }
});
