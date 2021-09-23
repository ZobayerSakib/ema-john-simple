import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    let ship = 0;
    for (const product of cart) {
        ship = ship + product.shipping;
    }
    const tax = (total + ship) / 10;

    const grandTotal = total + ship + tax;
    return (
        <div className='cartDesign'>

            <h2 style={{ color: 'orange' }}>Order Summary</h2>
            <h3>Items Ordered:{props.cart.length}</h3>
            <hr />
            <p>Tolal: {total.toFixed(2)}</p>
            <hr />
            <p>Shipping: {ship.toFixed(2)}</p>
            <hr />
            <p>Tax: {tax.toFixed(2)}</p>
            <hr />
            <p>Grand Total Price: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;