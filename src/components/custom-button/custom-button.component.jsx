import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSingIn,inverted, ...otherProps}) => (
    <button className={`
    ${inverted ? 'inverted': ''}
    ${isGoogleSingIn ? 'google-sing-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
    );


export default CustomButton;