import React from "react";
import './header.style.scss';
import { Route, Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
    return (
        <div className="header">
            <div>
                <Link className='logo-container' to="/">
                    <Logo className="logo" />
                </Link>
            </div>
            <div className="options">
                <Link className='options' to="/shop">
                    SHOP
                </Link>
                <Link className='options' to="/">
                    CONTACT
                </Link>
                <Link className='options' to="/">
                    CART
                </Link>
            </div>
        </div>);
}


export default Header;