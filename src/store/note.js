import axios from 'axios';

const apiGet = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json"
    },
})

const { createSlice } = require("@reduxjs/toolkit");

const noteSlice = createSlice({
    name: 'note',
    initialState: {
        note: {},
        noteList: [],
        isLoading: false,
        fetchList: []
    },

    reducers: {
        addNote: (state, action) => {
            state.push(action.payload)
        },
        setNotes: (state, action) => {
            state.noteList = action.payload
        },
        setNote: (state, action) => {
            state.post = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = !state.isLoading
        }
    }
})

export const { addNote, setNote, setNotes, setLoading } = noteSlice.actions;

export default noteSlice.reducer;

export function fetchNoteList(data) {
    return async function fetchNoteListThunk(
        dispatch,
        getState
    ) {
        dispatch(setLoading());
        try {
            const res = await apiGet.get(
                `/api/note/`,
            );
            dispatch(setNotes(res.data))
            dispatch(setLoading());
        } catch (err) {
            dispatch(setLoading());
        }
    };
}

export function createNote(data) {
    return async function fetchNoteThunk(
        dispatch,
        getState
    ) {
        dispatch(setLoading());
        try {
            const res = await apiGet.post(
                `/api/note/`,
                (data = data)
            );
            console.log(res.data, 'post note data');
            dispatch(setLoading());
            dispatch(fetchNoteList())
            // window.location.href = "/";
        } catch (err) {
            dispatch(setLoading());
        }
    }
}
