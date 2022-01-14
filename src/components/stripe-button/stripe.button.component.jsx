import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51KHyDPDsEvpyXWJYfQXk2U8cHdS5tL41fspXRP9pzwgxiJF2sCYRSHlGuA7vMPPBpbN9VyNKVRXRBEs5PCkLGAn1002ijkbrEy';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return (
            <StripeCheckout
                label='Pay Now'
                name='CRWN Clothing Ltd.'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
    );
};

export default StripeButton;