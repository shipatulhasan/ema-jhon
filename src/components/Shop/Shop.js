import React, { useEffect, useState } from 'react';
import { addToDb, getItemFromLS } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{

        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    }, [])

    const [cart,setCart] = useState([])

    useEffect(()=>{

        const storedCart = getItemFromLS()
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // for(const product)
                let newQuantity = storedCart[id]
                addedProduct.quantity = newQuantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)

    }, [products])

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
    return (
        <section className='shop'> 
        <div className='product-container'>
            {
                products.map(product=> <Product product={product} handleCart = {handleCart} key={product.id}></Product>)
            }
            

        </div>
        <div className='cart-container'>

            <Cart cart = {cart}></Cart>

        </div>
            
        </section>
    );
};

export default Shop;