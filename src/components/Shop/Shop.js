import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';


const Shop = () => {
    const firstTen = fakeData.slice(0,9)
    const [products, setProducts] = useState(firstTen)
    console.log(fakeData);

    const [cart, setCart] = useState([])

    const handleProduct = (product) => {
        console.log("products added", product);
        const newCart =[...cart, product]
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container"> 
                {
                    products.map(product => <Product handleProduct = {handleProduct} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            <h6>Order Summary: {cart.length}</h6>
            </div>
            
        </div>
    );
};

export default Shop;