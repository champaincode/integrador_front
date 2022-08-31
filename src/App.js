import './App.css';
import {Routes, Route} from "react-router-dom"
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Menu from './components/Seccion/Menu'
import Login from './components/Login/Login';
import Register from "./components/Login/Register"
import Profile from './components/Login/Profile'
import MenuAdmin from './components/Login/AdminDashboard/pages/homeAdmin/MenuAdmin'
import Aboutus from './components/Seccion/Aboutus'
import Location from './components/Seccion/Location'
import Favorites from './components/Seccion/Favorites'
import Bookings from './components/Seccion/Bookings'
import Shop from "./components/Seccion/Shop/Shop"
import ProductSearch from "./components/ProductSearch"
import ProductAdmin from './components/Login/AdminDashboard/pages/homeAdmin/ProductAdmin';


function App() {
  const user = useSelector((state)=>state.user)
  return (
   <>
    <Navbar/>
 
     <Routes>  
     <Route path="/menu" element={<Menu />} />  

      
      {user.id &&  <Route path="/profile" element={<Profile />} /> }
      <Route path="/" element={<Home/>} />
 
      <Route path="/About-us" element={<Aboutus/>} />  
      <Route path="/location" element={<Location />} />
      <Route path="/favorites" element={<Favorites />} /> 
      <Route path="/bookings" element={<Bookings  />} />     
      <Route path="/login" element={<Login />} />  
      <Route path="/search/:tittle" element={<ProductSearch />}/>
      <Route path="/shop" element={<Shop />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/admin" element={ <Sidebar />}/> */}
      <Route path="/admin/users" element={<MenuAdmin />} />
      <Route path="/admin/products" element={<ProductAdmin/>} />
      {/* <Route path="/admin/products" element={} /> */}
      </Routes>
     
   </>
  );
}

export default App;
