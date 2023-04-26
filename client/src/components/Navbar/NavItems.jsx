import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/NavItems.scss";

const NavItems = () => {
    return (
        <>
        <nav className="nav-container">
            <div className='nav-items'>
                <div><Link to={"/"} className="nav-text">সর্বশেষ</Link></div>
                <div><Link to={"/"} className="nav-text">বিশেষ সংবাদ</Link></div>
                <div><Link to={"/"} className="nav-text">রাজনীতি</Link></div>
                <div><Link to={"/"} className="nav-text">করোনাভাইরাস</Link></div>
                <div><Link to={"/"} className="nav-text">বাংলাদেশ</Link></div>
                <div><Link to={"/"} className="nav-text">বিশ্ব</Link></div>
                <div><Link to={"/"} className="nav-text">বাণিজ্য</Link></div>
                <div><Link to={"/"} className="nav-text">মতামত</Link></div>
                <div><Link to={"/"} className="nav-text">খেলা</Link></div>
                <div><Link to={"/"} className="nav-text">বিনোদন</Link></div>
                <div><Link to={"/"} className="nav-text">চাকরি</Link></div>
                <div><Link to={"/"} className="nav-text">জীবনযাপন</Link></div>
            </div>
        </nav>
        </>
    );
};

export default NavItems;