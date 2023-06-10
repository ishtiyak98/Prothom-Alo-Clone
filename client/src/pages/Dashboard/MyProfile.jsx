import React, { useState } from "react";
import "../../styles/Dashboard/MyProfile.scss";
import { useSelector } from "react-redux";
import moment from "moment";
import AvatarLogo from "../../assets/avatar.png";
import { BiEditAlt } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";

const MyProfile = () => {
  const { user } = useSelector((state) => state.userSlice);

  const [editName, setEditName] = useState(false);
  return (
    <section className="myProfile-container">
      <h5 className="heading-text">My Profile</h5>
      <div className="profile-info">
        <div className="profile-info-details order-last lg:order-first">
          <div className="flex items-center">
            <div>
              <span className="font-bold">Name:</span>{" "}
              {editName ? (
                <form className="inline">
                  <input type="text" />
                </form>
              ) : (
                user?.name
              )}
            </div>
            {!editName && (
              <BiEditAlt
                className="cursor-pointer ms-2"
                onClick={() => setEditName(true)}
              ></BiEditAlt>
            )}
            {editName && (
              <BsCheckCircleFill
                className="cursor-pointer ms-2"
                onClick={() => setEditName(false)}
              ></BsCheckCircleFill>
            )}
          </div>
          <p>
            <span className="font-bold">Email:</span> {user?.email}
          </p>
          <p>
            <span className="font-bold">Gender:</span> {user?.gender}
          </p>
          <p>
            <span className="font-bold">Birth Date:</span> {user?.birthDate}
          </p>
          <p>
            <span className="font-bold">Phone:</span> {user?.phone}
          </p>
          <p>
            <span className="font-bold">Subscription Type:</span>{" "}
            <span className="text-green-600">Free</span>
          </p>
          <div className="flex space-x-2">
            <p>
              <span className="font-bold">Joined: </span>
              {new Date(user?.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>({moment(user?.createdAt).startOf("hour").fromNow()})</p>
          </div>
        </div>
        <div className="order-first lg:order-last profile-image-container">
          {user.profilePic ? (
            <img src={user.profilePic} className="profile-img" alt="" />
          ) : (
            <img src={AvatarLogo} className="profile-img" alt="" />
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
