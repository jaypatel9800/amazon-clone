import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../stateProvider";
import { auth } from "../auth/firebase";

const Header = () => {
  const[{cart, user}] = useStateValue();
  const handleAuth = () => {
    if(user){
      auth.signOut();
    }
  }
  console.log(cart)
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionOne">{user ? `Hello, ${user.email}` : "Hello, User"}</span>
            <span className="header__optionTwo">{user ? 'Sign Out' : "SIgn In"}</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Return</span>
            <span className="header__optionTwo">& Order</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            <ShoppingCartIcon />
            <span className="header__optionTwo header__cartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
