import React from "react";
import { TiPlusOutline } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown, FaShoppingCart } from "react-icons/fa";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="right-nav">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
        />
        <p>
          Explore{" "}
          <span>
            plus <TiPlusOutline />{" "}
          </span>{" "}
        </p>
      </div>
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Search here..."
        />
        <FiSearch className="search" />
      </div>
      <div className="button">
        <Button className='button' name="Login" />
      </div>
      <div className="seller">
        <h2>Become a Seller</h2>
      </div>
      <div className="more">
        <h2>
         More
        </h2>
        <FaAngleDown />
      </div>
      <div className="cart">
        <FaShoppingCart/>
        <h2>Cart</h2>
      </div>
    </nav>
  );
};

export default Navbar;
