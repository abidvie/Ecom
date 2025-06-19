

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
import BillingDetailsPage from './pages/BillingDetailsPage'
import { Provider } from 'react-redux';
import Store from './store/Store'
import MyAccount from './pages/MyAccount'
import Mylist from './pages/Mylist'
import MyOrder from './pages/Myorder'
function App() {


  return (
    <>
  <Provider store={Store}>
<BrowserRouter>
<Header/>
<Routes>
  <Route path={"/"} element={<Home/>}/>
   <Route path={"/Productlisting"} element={<Productlisting/>}/>
   <Route path={"/Productdetails/:id"} exact={true} element={<Productdetails/>}/>
    <Route path={"/login"} exact={true} element={<Login/>}/>
     <Route path={"/cart"} exact={true} element={<CartPage/>}/>
     <Route path={"/otp"} exact={true} element={<OtpPage/>}/>
      <Route path={"/billingdetails"} exact={true} element={<BillingDetailsPage/>}/>
       {/* <Route path={"/myaccount"} exact={true} element={<MyAccount/>}/> */}
         <Route path={"/myprofile"} exact={true} element={<MyAccount/>}/>
          <Route path={"/mylist"} exact={true} element={<Mylist/>}/>
         
           <Route path={"/myorders"} exact={true} element={<MyOrder/>}/>
</Routes>
<Footer/>
</BrowserRouter>
  </Provider>

     
    </>
  )
}

export default App
