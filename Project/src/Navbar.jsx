import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserDetails } from "../userDetails";
import Cookies from "js-cookie";
import { Ability } from "../role/Ability";

const Navbar = () => {
  const nav = useNavigate();
  let user = getUserDetails();
  
  const logOut = () => {
    Cookies.remove("token");
    nav("/login");
  };

  return (
    <nav>
      <div>
        <Link to="/">
          Home
        </Link>
        {Ability(["admin"]) && (
          <Link to="/assign">
            Assign
          </Link>
        )}
      </div>
      <div>
        {user ? (
          <button onClick={logOut}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )}
        {user ? (
          <span>{user.name}</span>
        ) : (
          <Link to="/signup">
            Signup
          </Link>
        )}
      </div>
      <div>
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button>
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
