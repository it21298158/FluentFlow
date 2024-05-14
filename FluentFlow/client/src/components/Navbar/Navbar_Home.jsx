import React, { useEffect, useState } from "react";
import "./Navbar_Home.css";
import logo from "../../assets/FluentFlowLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container1 ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className="nav_ul">
        <li>
          <Link to="/sign-up">
            <button className="mt-1 text-white uppercase py-4 text-base font-light px-10 hover:bg-white hover:bg-opacity-10">
              Sign Up
            </button>
          </Link>
        </li>
        <li>
          <Link to="/sign-in">
            <button className="mt-1 text-white uppercase py-4 text-base font-light px-10 hover:bg-white hover:bg-opacity-10">
              Log in
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
