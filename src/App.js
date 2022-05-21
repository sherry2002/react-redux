import './App.css';
import Login from './services/login';
import Home from './services/Home';
import Register from './services/Register';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const { userData } = useSelector(
    (state) => state.userReducer,

  ) 
  console.log("user",userData)

  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      <Route path="/" element={ userData ? <Home /> : <Login/> }/>
      <Route path="/register" element={  <Register/> }/>
    </Routes>
  </BrowserRouter>

     
     </div>
  );
}

export default App;
