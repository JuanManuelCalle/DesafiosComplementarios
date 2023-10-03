import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";
import { products } from "../../data/products";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        allCategories: categories,
        allProducts: products,
        CategorySelected: "",
        productsFilterCategory: []
    },
    reducers:{
        setCategory: (state, action) => {
            state.CategorySelected = action.payload;

            state.pro
        }
    }
})

export const {setCategory} = homeSlice.actions

export default homeSlice.reducer;