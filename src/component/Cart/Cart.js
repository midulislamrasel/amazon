import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
                <h2>Order summary</h2>
                <p>Selected Items : {cart.length}</p>
                <p>Selected items :</p>
                <p>Total Price : </p>
                <p>Total shipping Charge : </p>
                <p>Tax $:</p>
                <h3>Grand Total :$ </h3>
                <button>Clear Cart </button>
                <button>Review Order</button>
        </div>
    );
};

export default Cart;