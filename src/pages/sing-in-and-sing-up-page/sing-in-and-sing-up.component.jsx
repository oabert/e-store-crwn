import React from 'react';
import './sing-in-and-sing-up.style.scss';

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sing-up/sign-up.component";

const SingInAndSingUp = () => (
    <div className='sing-in-and-sing-up'>
        <SignIn/>
        <SignUp/>
    </div>
);


export default SingInAndSingUp;