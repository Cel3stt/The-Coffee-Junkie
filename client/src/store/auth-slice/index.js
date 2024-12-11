import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
    error: null
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async (formData, thunkAPI) => {
        try {
            console.log('Sending registration request:', formData); // Log form data being sent

            // Make API request
            const response = await axios.post(
                'http://localhost:3000/api/auth/register',
                formData,
                { withCredentials: true } // Include credentials for cookies
            );

            console.log('Registration response:', response.data); // Log response data

            return response.data; // This will be used as the payload for 'fulfilled'
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message); // Log error details

            return thunkAPI.rejectWithValue(
                error.response?.data || { message: 'Registration failed' }
            );
        }
    }
);


// ==================================================
// Login
// ==================================================
export const loginUser = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI) => {
        try {
            console.log('Sending registration request:', formData); // Log form data being sent

            // Make API request
            const response = await axios.post(
                'http://localhost:3000/api/auth/login',
                formData,
                { withCredentials: true }
            );

            console.log('Registration response:', response.data); // Log response data

            return response.data; // This will be used as the payload for 'fulfilled'
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message); // Log error details

            return thunkAPI.rejectWithValue(
                error.response?.data || { message: 'Registration failed' }
            );
        }
    }
);




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.error = action.payload?.message || 'Registration failed';
            })


            //login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
             
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action)
                state.isLoading = false;
                state.user = action.payload.success  ? action.payload.user : null ;
                state.isAuthenticated =  action.payload.success;
               
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                
            });

            
    }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;