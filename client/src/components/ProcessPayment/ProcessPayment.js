import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'; 
import PaymentCardForm from './PaymentCardForm';
const stripePromise = loadStripe('pk_test_51Ie0ZBABJxkoligZuw7g0COhATYP6Yp365wBwMdj8BQbeGLlC8haxK8W4USpimruwWVUHh2k9RXfapJVYYNZNbHA00MroWTTnX');

const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                 <PaymentCardForm handlePaymentSuccess={handlePaymentSuccess}></PaymentCardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;