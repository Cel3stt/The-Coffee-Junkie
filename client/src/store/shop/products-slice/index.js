import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const filterAndSortProducts = (products, filters, sortBy) => {
  let filteredProducts = [...products];

  if (filters && Object.keys(filters).length > 0) {
    filteredProducts = filteredProducts.filter(product => {
      return Object.entries(filters).every(([key, values]) => {
        if (!values || values.length === 0) return true;
        
        switch(key) {
          case 'category':
            return values.includes(product.category.toLowerCase());
          case 'brand':
            return values.includes(product.brand.toLowerCase());
          case 'price':
            const [min, max] = values;
            return product.price >= min && product.price <= max;
          default:
            return true;
        }
      });
    });
  }

  if (sortBy) {
    filteredProducts.sort((a, b) => {
      switch(sortBy) {
        case 'price-low-to-high':
          return a.price - b.price;
        case 'price-high-to-low':
          return b.price - a.price;
        case 'name-a-z':
          return a.name.localeCompare(b.name);
        case 'name-z-a':
          return b.name.localeCompare(a.name);
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0;
      }
    });
  }

  return filteredProducts;
};

const initialState = {
    isLoading: false,
    productList: []
}

export const fetchAllFilteredProducts = createAsyncThunk(
    "/products/fetchAllProducts",
    async ({filterParams, sortParams}) => {
        try {
            const result = await axios.get(
                `http://localhost:3000/api/shop/products/get`
            );
            
            const filteredAndSortedProducts = filterAndSortProducts(
                result?.data?.data,
                filterParams,
                sortParams
            );

            return {
                ...result.data,
                data: filteredAndSortedProducts
            };
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }
);

export const fetchProductDetails = createAsyncThunk(
  'products/fetchProductDetails',
  async (productId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/shop/products/get/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const shopingProductSlice = createSlice({
    name: 'shoppingProducts',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(fetchAllFilteredProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productList = action.payload.data;
            })
            .addCase(fetchAllFilteredProducts.rejected, (state) => {
                state.isLoading = false;
                state.productList = [];
            })
            .addCase(fetchProductDetails.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productDetails = action.payload;
                state.error = null;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export default shopingProductSlice.reducer;