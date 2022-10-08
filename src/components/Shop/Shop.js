import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, resetDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const {products,initialCart} = useLoaderData()

    const [cart,setCart] = useState(initialCart)

   

    const handleCart = (selectedProduct)=>{
        addToDb(selectedProduct.id)
        const exists = cart.find(product => product.id === selectedProduct.id)
        let newCart = []
        if(!exists){

            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]

        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1 
            newCart = [...rest, exists]
        }

        setCart(newCart)

    }
    const removeCart = ()=>{
        resetDb()
        setCart([])
    }
    return (
        <section className='shop'> 
        <div className='product-container'>
            {
                products.map(product=> <Product product={product} handleCart = {handleCart} key={product.id}></Product>)
            }
            

        </div>
        <div className='cart-container'>

            <Cart cart = {cart}>
            <Link to='/orders'><button className='view-btn'>View Orders</button> </Link>
            <button className='clear-btn' onClick={removeCart}>
                Clear Cart
            </button>
            </Cart>

        </div>
            
        </section>
    );
};

export default Shop;