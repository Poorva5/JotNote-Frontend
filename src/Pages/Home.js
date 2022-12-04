import React, { useEffect } from 'react';
import CreateNoteForm from "../Components/Notes/CreateNoteForm";
import Note from "../Components/Notes/Note";
import SideBar from "../Components/Sidebar/SideBar";
import { fetchNoteList } from '../store/note';
import { useSelector, useDispatch } from "react-redux";


const Home = () => {
    const dispatch = useDispatch();
    const { noteList } = useSelector(state => state.note)

    useEffect(() => {
        dispatch(fetchNoteList())
    }, [])
    const renderNotes = (noteList) => {
        return (
            <>
                {noteList.map((note, index) => (
                    <Note key={note.id} index={index} note={note} />
                ))}
            </>
        )
    }
    return (
        <div>
            <div style={{ display: 'flex', height: '100%', justifyContent: 'space-between', }}>
                <SideBar />
                <div style={{ display: 'flex', flexDirection: 'column', width: '80%', }}>
                    <CreateNoteForm />
                    <div className="d-flex flex-wrap" style={{ gap: '20px' }}>{renderNotes(noteList)}</div>
                </div>
            </div>
        </div>
    )
}

export default Home;