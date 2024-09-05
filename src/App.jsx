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
    <Route path="/favourite" element={ <Favourite/>} />
    <Route path="/product/:id" element={ <Product/>} />
    </Routes>
    <Footer/>
    {/* <Count/> */}
   
    </>
  )
}

export default App
