import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;  
        shipping = shipping + product.shipping * product.quantity;  

    }
    const tax = (total * 10 / 100).toFixed(2);
    const taxtotal = parseFloat(tax) 
    const grandTotal = total + shipping + taxtotal;


    return (
        <div className='cart'>
                <h2>Order summary</h2>
                <p>Selected Items : {quantity}</p>
                <p>Selected items :</p>
                <p>Total Price :${total} </p>
                <p>Total shipping Charge :${shipping} </p>
            <p>Tax $:{taxtotal}</p>
                <h3>Grand Total :${grandTotal} </h3>
                <button>Clear Cart </button>
                <button>Review Order</button>
        </div>
    );
};

export default Cart;