

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'
import Footer from './components/foooter/Footer'
import Productlisting from './pages/Productlisting '
import Productdetails from './pages/Productdetails'
import Login from './pages/Login'
// import CartPage from './pages/CartPage'

import CartPage from './pages/CartPage'
import OtpPage from './pages/OtpPage'

function App() {


  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path={"/"} element={<Home/>}/>
   <Route path={"/Productlisting"} element={<Productlisting/>}/>
   <Route path={"/Productdetails/:id"} exact={true} element={<Productdetails/>}/>
    <Route path={"/login"} exact={true} element={<Login/>}/>
     <Route path={"/cart"} exact={true} element={<CartPage/>}/>
     <Route path={"/otp"} exact={true} element={<OtpPage/>}/>
</Routes>
<Footer/>
</BrowserRouter>
     
    </>
  )
}

export default App
