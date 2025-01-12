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
            return values.includes(product.category);
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
      const priceA = a.salePrice || a.price || 0;
      const priceB = b.salePrice || b.price || 0;

      switch(sortBy) {
        case 'price-lowtohigh':
          return priceA - priceB;
        case 'price-hightolow':
          return priceB - priceA;
        case 'title-atoz':
          return (a.name || "").localeCompare(b.name || "");
        case 'title-ztoa':
          return (b.name || "").localeCompare(a.name || "");
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
  "/products/fetchProductDetails",
  async (id) => {
    const result = await axios.get(
      `http://localhost:3000/api/shop/products/get/${id}`
    );

    return result?.data;
  }
);

const shoppingProductSlice = createSlice({
    name: 'shoppingProducts',
    initialState,
    reducers: {
      setProductDetails: (state) => {
        state.productDetails = null
      }
    },
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
export const { setProductDetails } = shoppingProductSlice.actions;

export default shoppingProductSlice.reducer;