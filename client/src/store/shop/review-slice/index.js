import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  reviews: [],
  error: null,
  totalReviews: 0, // Optional if API provides total count
};

export const addReview = createAsyncThunk(
  "/order/addReview",
  async (formdata) => {
    const response = await axios.post(
      `http://localhost:3000/api/shop/review/add`,
      formdata
    );
    return response.data;
  }
);

export const getReviews = createAsyncThunk(
  "/order/getReviews",
  async (productId) => {
    const response = await axios.get(
      `http://localhost:3000/api/shop/review/${productId}`
    );
    return response.data;
  }
);

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews.push(action.payload.data); // Add the new review
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data; // Assuming API response contains reviews
        state.totalReviews = action.payload.total || 0; // Optional if API provides metadata
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Capture error for UI feedback
      });
  },
});

export default reviewSlice.reducer;
