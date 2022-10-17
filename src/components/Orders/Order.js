import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import ('./Order.css')

const Order = () => {
    const {initialCart} = useLoaderData()
    const [cart,setCart] = useState(initialCart)
    const handleRemove = (id)=>{

        const remaining = cart.filter(product=>product.id !== id)
        setCart(remaining)
        removeDb(id)

    }
    
    return (
        <section className='order-container'>
        <div className='review-container'>
            {
                cart.map(product =><ReviewItem key={product.id} handleRemove={handleRemove} product={product}></ReviewItem>)
            }
            {
                cart.length===0 && <h2>Hey you don't have any product left for review please buy something <Link to='/'>Shop</Link> </h2>
            }
        </div>
        <div className="summery-container">
            <Cart cart={cart}>
                    <Link to='/'><button>Shop more</button> </Link>
                    <Link to='/checkout'><button className='check-out'>Check Out</button> </Link>

            </Cart>
        </div>
        </section>
    );
};

export default Order;