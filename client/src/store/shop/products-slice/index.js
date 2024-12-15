import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const filterAndSortProducts = (products, filters, sortBy, searchQuery = '') => {
  let filteredProducts = [...products];

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    filteredProducts = filteredProducts.filter(product => 
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }

  if (filters && Object.keys(filters).length > 0) {
    filteredProducts = filteredProducts.filter(product => {
      return Object.entries(filters).every(([key, values]) => {
        if (!values || values.length === 0) return true;
        
        switch(key) {
          case 'category':
            const productCategory = product.category.toLowerCase().replace(/\s+/g, '');
            return values.some(value => 
              value.toLowerCase().replace(/\s+/g, '') === productCategory
            );
          case 'brand':
            return values.some(value => 
              product.brand.toLowerCase() === value.toLowerCase()
            );
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
      const getEffectivePrice = (product) => {
        return product.salePrice && product.salePrice > 0 ? product.salePrice : product.price;
      };

      const priceA = getEffectivePrice(a);
      const priceB = getEffectivePrice(b);

      switch(sortBy) {
        case 'price-lowtohigh':
          return priceA - priceB;
        case 'price-hightolow':
          return priceB - priceA;
        case 'title-atoz':
          return a.title.localeCompare(b.title);
        case 'title-ztoa':
          return b.title.localeCompare(a.title);
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
    async ({filterParams, sortParams, searchQuery}) => {
        try {
            const result = await axios.get(
                `http://localhost:3000/api/shop/products/get`
            );
            
            const filteredAndSortedProducts = filterAndSortProducts(
                result?.data?.data,
                filterParams,
                sortParams,
                searchQuery
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
            });
    }
});

export default shopingProductSlice.reducer;