import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from '../stateProvider';

function CheckoutProduct({id, image, title, price, raiting}) {
    const [, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'Remove_From_cart',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
             <img className='checkoutProduct__image' src={image} alt="checkoutProduct"/>
            <div className="checkoutProduct__info">
            <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(raiting)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
