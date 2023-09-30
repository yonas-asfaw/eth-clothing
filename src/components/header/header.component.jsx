import React from "react";
import './header.style.scss';
import { Route, Link } from "react-router-dom";
import { auth } from "../../firbase/firebase.utils";
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = (currentuser) => {
    console.log(currentuser);
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
                <Link className='options' >
                    {
                        currentuser ? (
                            <Link className="option" onClick={() => auth.signOut()}> Sign Out</Link>)
                            :
                            (<Link className="option" to="/sigin"> Sign In</Link>)
                    }
                </Link>
            </div>
        </div>);
}


export default Header;