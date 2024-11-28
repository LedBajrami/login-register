import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../helpers/apiClient";

export const loginUser = createAsyncThunk('/auth/loginUser',
     async({email, password}, {rejectWithValue}) => {
        try {
            const response = await apiClient('/api/login', {
                method: "POST",
                body: JSON.stringify({email, password})
            })
            return response
        } catch (error) {
            return rejectWithValue(error.message || 'Invalid email or password')
        }
} )


export const registerUser = createAsyncThunk('/auth/registerUser', 
    async ({name, email, password, confirmPassword}, {rejectWithValue}) => {
        try {
            const response = await apiClient('/api/register', {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    password_confirmation: confirmPassword,
                  })
            })
            return response
        } catch (error) {
            return rejectWithValue(error.message || 'Registration failed. Please try again')
        }
    }
)