import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product,handleCart}) => {

    const {img,name,price,ratings,seller} = product

    return (
        <div className='card'>
            <div className="card-body">
                <img src={img} alt="" />
                <div className="card-content">
                    <h4>{name}</h4>
                    <h5>Price: ${price}</h5>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings}</p>
                </div>
            </div>

            <div className="card-footer">  
                <button onClick={()=>handleCart(product)}>
                    <p>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} /> </button>

            </div>   
        </div>
    );
};

export default Product;