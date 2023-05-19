import React from "react";
import { HiMenu } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDashboardSidebar } from "../../../redux/sidebar/sidebarSlice";
import Logo from "../../../assets/logo/prothomalo_logo_eng.png";
import { Link } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import { useState } from "react";
import { userLogOut } from "../../../redux/user/userSlice";
import "../../../styles/Dashboard/DashboardNav.scss";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import CustomModal from "../../CustomModal/CustomModal";

const DashboardNav = () => {
  const { user } = useSelector((state) => state.userSlice);
  const [signOut, loading, error] = useSignOut(auth);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const success = await signOut();
    if (success) {
      dispatch(userLogOut());
      setLogoutSuccess(true);
    }
  };

  return (
    <div className="dash-nav-container">
      {loading && <LoadingSpinner></LoadingSpinner>}
      {logoutSuccess && (
        <CustomModal
          mode={"success"}
          heading={"SuccessFully Logout"}
          text={`You have been logged-out successfully`}
        ></CustomModal>
      )}
      {error && (
        <CustomModal
          mode={"error"}
          heading={"Logout Failed"}
          text={`${error}`}
        ></CustomModal>
      )}
      <div className="flex items-center space-x-8">
        <div>
          <HiMenu
            className="text-2xl cursor-pointer"
            onClick={() => dispatch(toggleDashboardSidebar())}
          ></HiMenu>
        </div>
        <div className="mt-1">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
        </div>
      </div>
      <div>
        <div className="w-[130px]">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {user.email && (
          <div className="logout-btn" onClick={handleLogout}>
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNav;
