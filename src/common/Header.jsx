import React, { useState } from "react";
import logo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faDiceFive,
  faPersonArrowDownToLine,
  faSearch,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UseContext from "../utils/UseContext";
import "../index.css";
import useonlineStatus from "../customHooks/useOnlineStatus";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import AppStore from "../utils/AppStore";

export default function Header() {
  const [searchState, setsearchState] = useState("");
  const onlineStatus = useonlineStatus();
  const { loggedInUser } = useContext(UseContext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <Provider store={AppStore}>
      <div className="">
        <header className="w-full fixed top-0 left-0 bg-white z-[99999]">
          <div className="max-w-[1290px] mx-auto grid grid-cols-4 xl:grid-cols-3">
            <div className="flex gap-[20px] items-center">
              <img className="w-[100px]" src={logo} alt="logo" />
              <div className="font-bold text-[15px] flex gap-5">
                <div className="position-relative">
                  <Link to="/">HOME</Link>
                </div>
                <div className="sm:flex hidden">
                  <form
                    onKeyUp={() => {
                      // console.log(searchState);
                    }}
                  >
                    <input
                      placeholder="location, click here to know the best food in your locality"
                      value={searchState}
                      onChange={(e) => {
                        setsearchState(e.target.value);
                      }}
                    />
                  </form>
                </div>
              </div>
            </div>
            <nav className="xl:col-span-2 md:col-span-3 col-span-2 text-[#3D4152] flex items-center justify-end">
              <ul className="md:flex hidden w-[671px] justify-around">
                <li>online status:{onlineStatus ? "✅" : "🔴"}</li>
                <li className="font-medium">
                  <Link to="/">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    &nbsp;&nbsp;Search
                  </Link>
                </li>
                <li className="font-medium">
                  <Link to="/About">
                    <FontAwesomeIcon icon={faWandSparkles}></FontAwesomeIcon>
                    &nbsp;&nbsp;Offers
                  </Link>
                </li>
                <li className="font-medium">
                  <Link to="/Course">
                    <FontAwesomeIcon icon={faDiceFive}></FontAwesomeIcon>
                    &nbsp;&nbsp;Help
                  </Link>
                </li>
                <li className=" font-bold">
                  <Link to="/Grocery ">
                    <FontAwesomeIcon
                      icon={faPersonArrowDownToLine}
                    ></FontAwesomeIcon>
                    &nbsp;&nbsp;{loggedInUser}
                    {/* <UseContext.Provider value={{loggedInUser:"Elon Mask"}}></UseContext.Provider> */}
                  </Link>
                </li>
                <li className="font-bold flex">
                  <Link to="/cart">
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    &nbsp;&nbsp;Cart-
                    {cartItems.length === 0
                      ? "0"
                      : cartItems.length <= 10
                      ? `0${cartItems.length}`
                      : `${cartItems.length}`}
                  </Link>
                </li>
              </ul>
              <div className="md:hidden flex justify-center">
              <div className="font-bold ">
                <Link to="/cart">
                  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                  &nbsp;&nbsp;Cart-
                  {cartItems.length === 0
                    ? "0"
                    : cartItems.length <= 10
                    ? `0${cartItems.length}`
                    : `${cartItems.length}`}
                </Link>
              </div>
            </div>
            </nav>
           
          </div>
        </header>
      </div>
    </Provider>
  );
}
