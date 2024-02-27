import { View,FlatList, StyleSheet } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";


const ItemListCategory = ({navigation }) => {
    const productsFilteredByCategory = useSelector((state) => state.shopReducer.value.productFilteredByCategory);
    const searchKeyword = useSelector((state) => state.shopReducer.value.searchKeyword);
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")

 

    useEffect(() => {
        const productsFiltered = productsFilteredByCategory.filter((product) =>
            product.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        setProducts(productsFiltered);
    }, [productsFilteredByCategory, searchKeyword]);


        return(
            <View style={{flex:1, backgroundColor: colors.blue_200}}>
                
                <View style={styles.header}>
                <Search keyword={searchKeyword} onSearch={setKeyword} />
            </View>
                <FlatList style={{marginTop: 30}}
                data={products}
                renderItem={({item})=> <ProductItem product={item} navigation={navigation}/>}
                keyExtractor={(item)=> item.id}
                showsVerticalScrollIndicator={false}
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
