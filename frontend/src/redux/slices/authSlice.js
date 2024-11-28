import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunks";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: !!localStorage.getItem("access_token"),
        token: localStorage.getItem("access_token") || null,
        error: null,
        status: "idle"
    },
    reducers: {
        logout(state) {
            state.isAuthenticated  = false
            state.token = null
            localStorage.removeItem("access_token")
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.token =  action.payload.token
            localStorage.setItem("access_token", action.payload.token)
            state.status = 'success'
            state.error = null
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.error = action.payload
            state.status = 'failed'
          })
          .addCase(registerUser.pending, (state) => {
            state.status = 'loading'
            state.error = null
          })
          .addCase(registerUser.fulfilled, (state) => {
            state.status = 'succees'
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.error = action.payload
            state.status = 'failed'
          })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer