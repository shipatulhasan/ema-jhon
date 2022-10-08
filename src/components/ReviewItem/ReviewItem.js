import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product,handleRemove}) => {
    const {id,img,name,price,quantity} = product
    return (
        <div>
            <div className="review-items-container">
                <div className="review-item">
                    <img src={img} alt="" />
                    <div className="review-item-details">
                        <h5>{name}</h5>
                        <p>price: ${price}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                </div>
                <div className="delete-btn">
                        <button onClick={()=>handleRemove(id)}>delete</button>
                    </div>
            </div>
        </div>
    );
};

export default ReviewItem;<div className="review-items-container">
<div className="review-item">
    <img src="" alt="" />
</div></div>