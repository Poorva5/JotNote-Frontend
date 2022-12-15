import axios from 'axios';

const apiGet = axios.create({
    // baseURL: 'http://15.207.8.22:8005',
    baseURL: 'http://127.0.0.1:8000',
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json",
        "Authorization": `Token ${localStorage.getItem('accessToken')}`
    },
})

const { createSlice } = require("@reduxjs/toolkit");

const noteSlice = createSlice({
    name: 'note',
    initialState: {
        note: {},
        noteList: [],
        isLoading: false,
        fetchingNote: false,
        pinnedNoteList: []
    },

    reducers: {
        addNote: (state, action) => {
            state.push(action.payload)
        },
        setNotes: (state, action) => {
            state.noteList = action.payload.unpinned_notes_list;
            state.pinnedNoteList = action.payload.pinned_notes_list
        },
        setNote: (state, action) => {
            state.note = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = !state.isLoading
        },

        setFetchingNote: (state, action) => {
            state.fetchingNote = !state.fetchingNote
        }
    }
})

export const { addNote, setNote, setNotes, setLoading, setFetchingNote } = noteSlice.actions;

export default noteSlice.reducer;

export function createNote(data) {
    return async function fetchNoteThunk(
        dispatch,
        getState
    ) {
        dispatch(setLoading());
        try {
            const res = await apiGet.post(
                `/create/my-notes/`,
                (data = data)
            );
            console.log(res.data, 'post note data');
            dispatch(fetchMyNoteList())
            // window.location.href = "/";
        } catch (err) {
            dispatch(setLoading());
        }
    }
}

export function fetchNoteDetail(id) {
    return async function fetchNoteDetailThunk(
        dispatch,
        getState
    ) {
        dispatch(setFetchingNote());
        try {
            const res = await apiGet.get(
                `/api/note/${id}`
            );
            dispatch(setNote(res.data))
        } catch (err) {
            dispatch(setFetchingNote());
        }
    };
}

export function updateNote(id, data) {
    return async function noteUpdateThunk(
        dispatch,
    ) {
        try {
            const res = await apiGet.put(
                `/api/note/${id}/`,
                (data = data)
            );
            dispatch(setNote(res.data));
            dispatch(fetchMyNoteList());
        } catch (err) {
            dispatch(setLoading())
        }
    };
}

export function deleteNote(id) {
    return async function deleteNoteThunk(
        dispatch,
    ) {
        try {
            const res = await apiGet.delete(
                `/api/note/${id}/`
            );
            dispatch(setLoading());
            dispatch(fetchMyNoteList())
        } catch (err) {
            dispatch(setLoading());
        }
    }
}

export function fetchMyNoteList(data) {
    return async function myListThunk(
        dispatch
    ) {
        try {
            const res = await apiGet.get(
                "/my-notes/"
            );
            dispatch(setLoading());
            dispatch(setNotes(res.data));
        } catch (err) {
            dispatch(setLoading())
        }
    }
}

export function updatePinnedNote(id) {
    return async function pinNoteUpdateThunk(
        dispatch
    ) {
        dispatch(setLoading());
        try {
            const res = await apiGet.put(
                `/pin-note/${id}/`,
            );
            dispatch(setNote(res.data));
            dispatch(fetchMyNoteList());
            dispatch(setLoading());
        } catch (err) {
            dispatch(setLoading());
        }
    }
}