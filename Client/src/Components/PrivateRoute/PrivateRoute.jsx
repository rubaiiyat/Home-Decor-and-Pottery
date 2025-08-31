import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-accent mx-auto"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return children;
};

export default PrivateRoute;
