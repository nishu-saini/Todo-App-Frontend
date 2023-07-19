import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, loading } = useContext(Context);

  if (!isAuthenticated) return <Navigate to={"/"} />;

  return loading ? (
    <Loader />
  ) : (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
