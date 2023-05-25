import React from 'react';
import "../../styles/Dashboard/MyProfile.scss";
import { useSelector } from 'react-redux';
import moment from 'moment';


const MyProfile = () => {
    const {user}= useSelector(state=> state.userSlice)
    return (
        <section className='myProfile-container'>
            <h5 className="heading-text">My Profile</h5>
            <div className='profile-info'>
                <p><span className='font-bold'>Name:</span> {user?.name}</p>
                <p><span className='font-bold'>Email:</span> {user?.email}</p>
                <p>Joined {user?.createdAt}</p>
                <p>{moment(user?.createdAt).startOf('hour').fromNow()}</p>
            </div>
        </section>
    );
};

export default MyProfile;