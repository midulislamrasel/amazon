import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        total = total + product.price;  
        shipping = shipping + product.shipping;
    }
    const tax = (total * 10 / 100).toFixed(2);
    const taxtotal = parseFloat(tax) 
    const grandTotal = total + shipping + taxtotal;


    return (
        <div className='cart'>
                <h2>Order summary</h2>
                <p>Selected Items : {cart.length}</p>
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