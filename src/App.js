import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {Routes, Route} from "react-router-dom"
import Register from "./components/Register"
import Home from './components/Home';

function App() {
  return (
   <>
    <Navbar/>
 
     <Routes>  
     
      <Route path="/login" element={<Login />} />  
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home/>} />
 
    </Routes>
   </>
  );
}

export default App;
