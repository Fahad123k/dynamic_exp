import { useSelector,useDispatch } from 'react-redux'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from "react-router";
import Favourite from './pages/Favourite';
import Product from './pages/Product';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import {ToastContainer} from'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch= useDispatch()

  return (
    <>
     <ToastContainer 
     position="top-left"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
    //  transition={Bounce}  
         />
    <Navbar/>
    <Routes>

    <Route path="/" element={ <Landing/>} />
    <Route path="/home" element={ <Home/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/favourite" element={ <Favourite/>} />
    <Route path="/product/:id" element={ <Product/>} />
    <Route path="*" element={<NotFound />} /> 
    </Routes>
    <Footer/>
    {/* <Count/> */}
   
    </>
  )
}

export default App
