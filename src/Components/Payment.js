import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

export default function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link> - ${getBasketTotal(basket)})
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>

                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 Old Lahore</p>
                    <p>Punjab, Pakistan</p >
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review Items & Delivery.</h3>
                </div>

                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}

                        />
                    ))}
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>

                <div className='payment__details'>
                    {/* Stripe */}
                </div>

            </div>

        </div>

    </div>
  )
}
