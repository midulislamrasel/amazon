import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { id,img,name,price,quantity,ratings,ratingsCount,seller,shipping,stock } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <p>Price : {price}</p>
            <p>Quantity : {quantity}</p>
            <p><span>Seller : {seller}</span></p>
        </div>
    );
};

export default Product;