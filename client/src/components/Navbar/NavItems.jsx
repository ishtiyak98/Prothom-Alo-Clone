import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/NavItems.scss";

const NavItems = () => {
    return (
        <>
        <nav className="nav-container">
            <div className='nav-items'>
                <div><Link to={"/"} className="nav-text">Bangladesh</Link></div>
                <div><Link to={"/"} className="nav-text">International</Link></div>
                <div><Link to={"/"} className="nav-text">Sports</Link></div>
                <div><Link to={"/"} className="nav-text">Opinion</Link></div>
                <div><Link to={"/"} className="nav-text">Business</Link></div>
                <div><Link to={"/"} className="nav-text">Youth</Link></div>
                <div><Link to={"/"} className="nav-text">Entertainment</Link></div>
                <div><Link to={"/"} className="nav-text">Lifestyle</Link></div>
            </div>
        </nav>
        </>
    );
};

export default NavItems;