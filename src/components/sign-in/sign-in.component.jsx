import React from 'react';

import {connect} from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

import {
    googleSignInStart,
    emailSignInStart
} from '../../redux/user/user.actions';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

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
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton
                            type='button'
                            onClick={googleSignInStart}
                            isGoogleSignIn
                        >
                            Sign in with Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
});

export default connect(
    null,
    mapDispatchToProps
)(SignIn);




// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: ''
//         }
//     }
//
//     handleSubmit = async event => {
//         event.preventDefault();
//
//         const {email, password} = this.state;
//
//         try{
//             await auth.signInWithEmailAndPassword(email, password);
//             this.setState({email: '', password: ''})
//         }catch (error){
//             console.log(error)
//         }
//
//
//     }
//
//     handleChange = event => {
//         const {value, name} = event.target;
//
//         this.setState({[name]: value})
//     }
//
//     render() {
//         return (
//             <div className='sign-in'>
//                 <h2>I already have an account</h2>
//                 <span>Sign in with your email and password</span>
//
//                 <form onSubmit={this.handleSubmit}>
//                     <FormInput name='email'
//                                type='email'
//                                handleChange={this.handleChange}
//                                value={this.state.email}
//                                label='email'
//                                required/>
//                     <FormInput name='password'
//                                type='password'
//                                value={this.state.password}
//                                label='password'
//                                handleChange={this.handleChange}
//                                required/>
//                                <div className='buttons'>
//                                    <CustomButton type='submit' value='Submit Form'>Sign in</CustomButton>
//                                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSingIn>Sign in with Google</CustomButton>
//                                </div>
//                 </form>
//             </div>
//         )
//     }
// };
//
// export default SignIn;

