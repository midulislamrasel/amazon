import React, { useEffect, useState } from 'react';
import {addToDb, getStoreCard} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {// thake//

    const [products, setProducts] = useState([])
    const [cart , setCart] = useState([]) //

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    


    useEffect(() => {
        const storedCart = getStoreCard();
        const saveCard = [];
        for (const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCard.push(addedProduct);
            }
            // console.log(addedProduct);
        }
        setCart(saveCard)
    },[products])



const addToCard = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
    }


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCard={addToCard}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;