import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import web3bridge from "/src/assets/web3bridge.svg";



const Header = () => {
  return (
    <header className="flex items-center justify-between container pb-8">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={web3bridge} alt="Logo" />
        </Link>
      </div>
     
    </header>
  );
};

export default Header;
