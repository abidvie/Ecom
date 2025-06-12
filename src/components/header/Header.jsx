import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import Navigation from "../navigation/Navigation";

export default function Header() {
  return (
    <header className="">
      <div className="top-strip py-2 ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-medium">
                Get up to 50% off new season styles,limited time only
              </p>
            </div>
            <div className=" col-2 flex items-center justify-end">
              <ul className="flex items-center gap-2">
                <li className="list-none">
                  <Link to="/helpcenter" className="link">
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/ordertracking" className="link">
                    Ordertracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="header py-3">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/public/assets/classylogo.jpg"></img>
            </Link>
          </div>
          <div className="col2 w-[45%] ">
            <Search/>
          </div>
          <div className="col3 w-[30%] pl-5 ">
         
                <Link to={'/login'} className="link">Login</Link> / <Link className="link" to={'/register'}>Register</Link>
         
          </div>
        </div>
      </header>
      
      <Navigation/>
    </header>
  );
}
