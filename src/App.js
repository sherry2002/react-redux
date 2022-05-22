import './App.css';
import Login from './services/login';
import Home from './services/Home';
import Register from './services/Product';
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
  console.log("user", userData)

  
  
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
