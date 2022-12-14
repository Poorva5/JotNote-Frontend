import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store/store';
import NavBar from './Components/Header/Header';
import Home from './Pages/Home';
import LandingPage from './Components/LandingPage/LandingPage';


const token = localStorage.getItem('accessToken')


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {token ? <Route path="/" element={<Home />}></Route> : <Route path='/' element={<LandingPage />}></Route>}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;