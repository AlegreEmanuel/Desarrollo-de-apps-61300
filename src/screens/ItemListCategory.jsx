import { View,FlatList, StyleSheet } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/ShopService";


const ItemListCategory = ({ navigation }) => {
    const category = useSelector((state) => state.shopReducer.value.categorySelected)
    const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category)
    
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState(""); 

    useEffect(() => {
        if (productsFilteredByCategory) {
            const productsRaw = Object.values(productsFilteredByCategory)
            const productsFiltered = productsRaw.filter((product) =>
                product.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 
            );
            setProducts(productsFiltered);
        }
    }, [productsFilteredByCategory, keyword]);

    return (
        <View style={{ backgroundColor: colors.blue_200, flex: 1, paddingHorizontal: 16 }}>
            <View>
                <Search keyword={keyword} setKeyword={setKeyword} />
            </View>
            <FlatList
                style={{ marginTop: 30 }}
                data={products}
                renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
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
