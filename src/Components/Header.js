import React from "react";
import "./Header.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
  const [{basket, user},dispatch]  = useStateValue();



  const handleAuthentication = () => {h
    if (user) {
      auth.signOut();
    }
  } 

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            alt=""
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <svg
            className="header__searchIcon"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
              clipRule="evenodd"
            ></path>
            <path
              fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">Hello, {user ? user.email.split("").reverse().join("").split('@').pop().split("").reverse().join("") : 'Guest'}</span>
              <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21,9h-1.42l-3.712-6.496l-1.736,0.992L17.277,9H6.723l3.146-5.504L8.132,2.504L4.42,9H3C2.688,9,2.395,9.146,2.205,9.393 c-0.189,0.248-0.252,0.57-0.17,0.87l2.799,10.264C5.071,21.395,5.865,22,6.764,22h10.473c0.898,0,1.692-0.605,1.93-1.475 l2.799-10.263c0.082-0.3,0.02-0.622-0.17-0.87C21.605,9.146,21.312,9,21,9z M17.236,20C17.236,20,17.236,20,17.236,20v1V20H6.764 L4.31,11H19.69L17.236,20z"></path>
            <path d="M9 13H11V18H9zM13 13H15V18H13z"></path>
          </svg>
          <span className="header__optionLineTwo header__basketCount">{ basket?.length }</span>
          </div>
        </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
