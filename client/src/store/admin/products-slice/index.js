import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
};

export const addNewProduct = createAsyncThunk(
  "/products/addnewproduct",
  async (formData) => {
    const result = await axios.post(
      "http://localhost:3000/api/admin/addProducts/add",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data;
  }
);

export const fetchAllProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async () => {
    const result = await axios.get(
      "http://localhost:3000/api/admin/addProducts/get"
    );
    return result?.data;
  }
);

export const editProduct = createAsyncThunk(
    "/products/editProduct",
    async ({id, formData}) => {
      const result = await axios.post(
        `http://localhost:3000/api/admin/addProducts/edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return result?.data;
    }
  );

  export const deleteProduct = createAsyncThunk(
    "/products/editProduct",
    async (id) => {
      const result = await axios.put(
        `http://localhost:3000/api/admin/addProducts/delete/${id}`,
        
      );
      return result?.data;
    }
  );



   
 
const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true
    }).addCase(fetchAllProducts.fulfilled, (state, action) => {

        state.isLoading = false
        state.productList = action.payload.data
    })

    .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false
        state.productList = []
    })
  },
});

export default AdminProductsSlice.reducer
