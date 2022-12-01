import CreateNoteForm from "../Components/Notes/CreateNoteForm";
import Note from "../Components/Notes/Note";
import SideBar from "../Components/Sidebar/SideBar";

const Home = () => {

    return (
        <div>
            <div style={{ display: 'flex', height: '100%', justifyContent: 'space-between', marginRight: '500px' }}>
                <SideBar />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ alignItems: 'center' }}>
                        <CreateNoteForm />
                    </div>
                    <Note />
                </div>
            </div>
        </div>
    )
}

export default Home;