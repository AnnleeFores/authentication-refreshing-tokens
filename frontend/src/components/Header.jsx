import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user } = useContext(AuthContext);
  return (
    <>
      <Link to="/home">Home</Link>

      <span> | </span>
      {user ? <p>Logout</p> : <Link to="/">Login</Link>}

      {user && <p>Hello {user.username} </p>}
    </>
  );
};

export default Header;
