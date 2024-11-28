import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: !!localStorage.getItem("access_token"),
        token: localStorage.getItem("access_token") || null
    },
    reducers: {
        login(state, action) {
            state.isAuthenticated = true
            state.token = action.payload
            localStorage.setItem("access_token", action.payload)
        },
        logout(state) {
            state.isAuthenticated  = false
            state.token = null
            localStorage.removeItem("access_token")
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer