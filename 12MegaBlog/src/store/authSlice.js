import { createSlice } from "@reduxjs/toolkit";

// this slice is to track the user authentication(user authenticated h ya nhi?)
const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state,action) => {
            state.status = true;
            state.userData = action.payload.userData;
        }, 

        logout: (state) =>{
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;