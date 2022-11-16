import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { product,addToCard} = props;
    const { id,img,name,price,quantity,ratings,ratingsCount,seller,shipping,stock } = product;
    
    // const { addToCard } = props;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>Name : {name}</h3>
                <p>Price : {price}</p>
                <p>Quantity : {quantity}</p>
                <p><span>Seller : {seller}</span></p>
            </div>
            <button onClick={()=> addToCard(product)} className='btn-card'>
            
                <p>Add to card </p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;