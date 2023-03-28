import axios from 'axios';

const apiWithoutToken = axios.create({
    baseURL: 'http://13.51.166.60:8000',
    // baseURL: "http://localhost:8000",
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json",
    },
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFTOKEN"
})

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: {},
        accessToken: '',
        isAuthorised: false
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state) => {
            state.loading = !state.loading
        },

        login: (state, action) => {
            localStorage.setItem('accessToken', action.payload.key)
            state.accessToken = action.payload.key;
        },
        setAuthorized: (state, action) => {
            state.isAuthorised = action.payload
        }
    }
})

export const { setUser, setLoading, setAuthorized, login } = authSlice.actions;

export default authSlice.reducer;

export function LoginUser(data) {
    return async function LoginUserThunk(
        dispatch
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithoutToken.post(
                "/dj-rest-auth/login/",
                data
            );
            dispatch(login(res.data))
            dispatch(setAuthorized(true));
            dispatch(setLoading());
            window.location.href = '/'
        } catch {

            dispatch(setLoading());
            dispatch(setAuthorized(false))
        }
    };
}


export function SignUpUser(data) {
    return async function SignUpThunk(
        dispatch,
        getState
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithoutToken.post(
                "/dj-rest-auth/registration/",
                data
            );
            console.log(res.data)
            dispatch(login(res.data))
            dispatch(setAuthorized(true));
            dispatch(setLoading());
            window.location.href = '/'
        } catch (err) {
            dispatch(setLoading());
            dispatch(setAuthorized(false))
        }
    };
}