import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Headjer() {
  const [{ basket, user }] = useStateValue();
  console.log(basket);
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option" onClick={handleAuthenticaton}>
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">Orders</span>
          </div>
        </Link>
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Yours</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span className="header_optionLineTwo header_baskerCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Headjer;
