import React from "react";

import './homepage.style.scss';

const Homepage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Hats</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SNEKERS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Women</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Men</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>

);

export default Homepage;