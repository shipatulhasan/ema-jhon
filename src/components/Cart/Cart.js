import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let total = 0
    let shippingCharge = 0
    let quantity = 0
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * quantity
        shippingCharge = shippingCharge + product.shipping
   
    }
    const taxTotal = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + taxTotal

    return (
        <div className='cart'>
            <h2 className='title'>Order Summery </h2>
            <div className="cart-item">

            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${taxTotal}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;