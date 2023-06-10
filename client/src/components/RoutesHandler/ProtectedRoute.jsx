import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const ProtectedRoute = ({ isLoading, isSuccess, children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading || isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user?.email || !isSuccess) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
