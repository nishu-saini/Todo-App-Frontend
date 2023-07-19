import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context, server } from "../main";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const logoutHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.get(`${server}/user/logout`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setIsAuthenticated(false);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>Todo App</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        {isAuthenticated ? (
          <button className="btn" disabled={loading} onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
