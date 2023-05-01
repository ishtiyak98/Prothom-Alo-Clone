import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Link to={"my-profile"}>My Profile</Link>
      <Link to={"edit-profile"}>Edit Profile</Link>
    </div>
  );
};

export default Sidebar;
