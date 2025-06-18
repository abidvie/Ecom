import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import './navicss.css'
import { Link } from 'react-router-dom';
import { FaRocket } from "react-icons/fa";
import Sidebar from './Sidebar';
// import Sidebar from './Sidebar';


export default function Navigation() {
  return (
  <>
  <nav>
    <div className="container flex items-center justify-end">
        <div className="col_1 w-[20%]">
          {/* <button className='shop_cat_btn'><CiMenuBurger className='text-[10px]'/>shop by catagories</button> */}
         
           {/* <Sidebar/> */}
           <Sidebar/>
        </div>
         <div className="col_2 w-[65%]">
         <ul className='flex items-center gap-5'>
          <li className='list-none'>
            <Link to={'/'} className='link transition'>home</Link>
          </li>
           <li className='list-none relative group'>
            <Link to={'/Productlisting'} className='link transition relative'>Fasion</Link>
            <div className='hidden group-hover:block absolute bg-white shadow-md min-w-[200px] z-10 p-[10px]'>
              <ul>
                <li onClick={()=>{console.log("hover men")}} className='list-none '>men </li>
                <li>women </li>
              </ul>
            </div>
          </li>
           <li className='list-none'>
            <Link to={'/'} className='link transition'>Electronics</Link>
          </li>
           <li className='list-none'>
            <Link to={'/'} className='link transition'>Bags</Link>
          </li>
           <li className='list-none'>
            <Link to={'/'} className='link transition'>Foootwaree</Link>
          </li>
           <li className='list-none'>
            <Link to={'/'} className='link transition'>Goceries</Link>
          </li>
           <li className='list-none'>
            <Link to={'/'} className='link transition'>Jewllery</Link>
          </li>
           <li className='list-none'>
            <Link to={'/'} className='link transition'>home</Link>
          </li>
         </ul>
         
        </div>
         <div className="col_3 w-[15%] flex gap-1.5">
          <p className='text-[14px]'>Free home delivery</p>
          <FaRocket />
          
         
        </div>
    </div>
  </nav>
  
  
  </>
  )
}
