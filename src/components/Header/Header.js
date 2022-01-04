import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";
import { auth } from "../../myFirebase";
import { useHistory } from "react-router-dom";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuthentication = () => {
    if (user) {
      dispatch({
        type: "CLEAR_BASKET",
      });
      auth.signOut();
      alert("Signed out, you will be moved to Homepage");
      history.push("/");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="mylogo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon
          className="header__searchIcon"
          onClick={(e) =>
            alert(`We are sorry, Search is not available for now`)
          }
        />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={user && "/orders"}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__basketIcon" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
