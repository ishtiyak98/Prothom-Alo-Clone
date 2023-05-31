import React from "react";
import "../../styles/Dashboard/MyProfile.scss";
import { useSelector } from "react-redux";
import moment from "moment";

const MyProfile = () => {
  const { user } = useSelector((state) => state.userSlice);
  return (
    <section className="myProfile-container">
      <h5 className="heading-text">My Profile</h5>
      <div className="profile-info">
        <p>
          <span className="font-bold">Name:</span> {user?.name}
        </p>
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
    </section>
  );
};

export default MyProfile;
