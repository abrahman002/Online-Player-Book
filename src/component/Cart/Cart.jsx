import React from 'react';
import Ordercart from '../Ordercart/Ordercart';
import './Cart.css'

const Cart = ({ cart }) => {
    let totalPrice = 0

    for (const product of cart) {
        totalPrice = totalPrice + product.price
    }
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <p>Select Player:{cart.length}</p>
            {
                cart.map(carts => <Ordercart carts={carts} key={carts.id}></Ordercart>)
            }

              <hr />
            <p>Total Cost:$ {totalPrice}</p>
        </div>
    );
};


export default Cart;