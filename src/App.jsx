

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'
import Footer from './components/foooter/Footer'
import Productlisting from './pages/Productlisting '
import Productdetails from './pages/Productdetails'

function App() {


  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path={"/"} element={<Home/>}/>
   <Route path={"/Productlisting"} element={<Productlisting/>}/>
   <Route path={"/Productdetails/:id"} exact={true} element={<Productdetails/>}/>
</Routes>
<Footer/>
</BrowserRouter>
     
    </>
  )
}

export default App
