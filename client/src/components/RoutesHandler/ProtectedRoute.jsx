import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  //const { user } = useSelector((state) => state.userSlice);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
