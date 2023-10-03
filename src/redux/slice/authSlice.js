import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: null,
        idToken: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setIdToken: (state, action) => {
            state.idToken = action.payload
        },
        ClearUser: (state) => {
            state.user = null,
            state.idToken = null
        }
    }
})

export const { setIdToken, setUser, ClearUser} = authSlice.actions

export default authSlice.reducer