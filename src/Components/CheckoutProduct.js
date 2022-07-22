import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title,price, rating, hideButton}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt={title} />
        <div className='checkoutProduct__info'>
            <h4>{title}</h4>
            <h4 className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </h4>
            <div className='checkoutProduct__rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
            </div>
            {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
        </div>
    </div>
  )
}

export default CheckoutProduct