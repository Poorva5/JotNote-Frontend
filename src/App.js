import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/Header/Header';
import CreateNoteForm from './Components/Notes/CreateNoteForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <CreateNoteForm />
      </BrowserRouter>
    </div>
  );
}

export default App;