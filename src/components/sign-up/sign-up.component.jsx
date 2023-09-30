import React from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-buttton.component";

import { auth, creatUserProfileDocument } from "../../firbase/firebase.utils";

import './sign-up.style.scss';
//import { eventWrapper } from "@testing-library/user-event/dist/utils";


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmpassword } = this.state;

        if (password != confirmpassword) {
            alert("password dont match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await creatUserProfileDocument(user);
        } catch (error) {
            console.error(error);
        }

    }



    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up woth your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label='Display Name '
                        required>

                    </FormInput>
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='Email'
                        required>

                    </FormInput>
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='password'
                        required>

                    </FormInput>
                    <FormInput
                        type='confirmpassword'
                        name='confirmpassword'
                        value={this.state.confirmpassword}
                        onChange={this.handleChange}
                        label='confirm passaword'
                        required>

                    </FormInput>

                    <CustomButton type="submit"
                    >
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp;
