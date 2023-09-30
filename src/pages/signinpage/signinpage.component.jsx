import React from "react";
import SignInto from "../../components/sign-in/sign-in.component";
import './signinpage.style.scss';
import SignUp from "../../components/sign-up/sign-up.component";

import './signinpage.style.scss'
const SignIn = () => (
    <div className="signinup">
        < SignInto />
        <SignUp />
    </div>

);

export default SignIn;