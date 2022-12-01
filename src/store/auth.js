const { createSlice } = require("@reduxjs/toolkit");


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        accessToken: ''
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { setUser } = authSlice.actions;

export default authSlice.reducer;