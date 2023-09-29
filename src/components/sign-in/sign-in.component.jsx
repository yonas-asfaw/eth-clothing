import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';
import CustomButton from "../custom-button/custom-buttton.component";
import { signInWithGoogle } from "../../firbase/firebase.utils"
class SignInto extends React.Component {



    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required
                    />
                    <div className="button">
                        <CustomButton type="submit"
                        >
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin
                        >
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInto;