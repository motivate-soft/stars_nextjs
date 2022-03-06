import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function CheckoutButton() {
    const createOrder=()=>{
        
    }
    
    return (
        <div>
            <PayPalButtons
                    createOrder={createOrder}
                    onApprove={handleOnApprove}
                />
        </div>
    )
}
