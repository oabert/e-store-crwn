import React from 'react';

import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
    );


export default CustomButton;

// const CustomButton = ({children, isGoogleSingIn,inverted, ...otherProps}) => (
//     <button className={`
//     ${inverted ? 'inverted': ''}
//     ${isGoogleSingIn ? 'google-sing-in':''} custom-button`} {...otherProps}>
//         {children}
//     </button>
// );
//
//
// export default CustomButton;
