import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/pokemon-logo.png";

function Header() {
  return (
    <header className="bg-[#111827] p-2">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white">
            <img src={logo} alt="pokemon-logo" className="h-[40px] md:h-[60]" />
          </Link>
          <nav className="space-x-4">
            <Link
              to="/compare"
              className="text-white hover:text-yellow-400 transition duration-300 font-bold"
            >
              Compare
            </Link>
            <Link
              to="/favourite"
              className="text-white hover:text-yellow-400 transition duration-300 font-bold"
            >
              Favourite
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
