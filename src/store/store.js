import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth';
import noteReducer from './note'

const store = configureStore(
    {
        reducer: {

            auth: authReducer,

            note: noteReducer,
        }
    }
)

export default store;