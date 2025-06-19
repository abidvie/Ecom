import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import Navigation from "../navigation/Navigation";
import Cartdrawer from "../cart/Cartdrawer";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { FaUserCircle } from "react-icons/fa";
import AccountMenu from "../profileicon/AccountMenu";
export default function Header() {
  const dispatch = useDispatch();
  // const login=useSelector((state)=>)
  const login = useSelector((state) => state.loginstate.isloggedin);
  console.log(login);

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
            <Search />
          </div>
          <div className="col3 w-[30%] pl-5 flex  gap-3 justify-evenly">
            {/* <Link to={"/login"} className="link">
              {login ? <div></div> : "logout"}
            </Link> */}
            <div>{ login ? (<div className="myaccountweap flex items-center gap-3 ">
            <AccountMenu/>
              <div className="info flex flex-col">
                <h4 className="text-[16px] font-bold">ABid Sarker</h4>
                <span className="text-[12px] font-[500]">sarkerdipto2055@gmail.com</span>
              </div>
            </div>) : <div><Link to={'/login'}>Log in</Link></div>}</div>
            <Link className="link" to={"/register"}>
              Register
            </Link>
            <Cartdrawer />
          </div>
        </div>
      </header>

      <Navigation />
    </header>
  );
}
