import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: "",
        email: "",
        profilePhoto: null
    },
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name
            state.email = action.payload.email
            state.profilePhoto = action.payload.profile_photo
        },
        updateProfilePhoto(state, action) {
            state.profilePhoto = action.payload
        }
    }
})

export const { setUser, updateProfilePhoto } = userSlice.actions
export default userSlice.reducer