import { createSlice } from "@reduxjs/toolkit";
import allProducts from '../../data/products.json'
import allCategories from '../../data/Categories.json'

export const shopSlice = createSlice({
    name: 'shop',
    initialState:{
        value:{
            products: allProducts,
            category: allCategories,
            categorySelected: '',
            productFilteredByCategory:[],
            productIdSelected: null,
            searchKeyword: '',
        }
    },
    reducers:{
      setCategorySelected: (state, action)=>{
        const categorySelected = state.value.categorySelected = action.payload
        const productsFiltered = allProducts.filter((product)=> product.category===categorySelected)
        state.value.categorySelected = categorySelected
        state.value.productFilteredByCategory=productsFiltered

      },

      setProductIdSelected: (state, action)=>{
        state.value.productIdSelected = action.payload
      },
      setSearchKeyword: (state, action) => {
        state.value.searchKeyword = action.payload;
    },
      
    }
})

export const {setCategorySelected,setProductIdSelected,setSearchKeyword } = shopSlice.actions

export default shopSlice.reducer