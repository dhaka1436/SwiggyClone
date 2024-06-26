import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Log In");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using our selector
  const cartItems = useSelector((store) => store.cart.items);
  console.table(cartItems);

  return (
    <div className=" flex justify-between bg-pink-50 shadow-lg mb-2 mx-1">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart"> Cart - ({cartItems.length}-items) </Link>
          </li>
          <button
            className="login px-4"
            onClick={() => {
              btnNameReact == "LogIn"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("LogIn");
            }}
          >
            {btnNameReact}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
