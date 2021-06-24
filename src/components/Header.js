import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";

export default function Header() {
  const { isLogin } = useContext(MyContext);
  return (
    <nav>
      <ul>
        {isLogin ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/records">Records</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
