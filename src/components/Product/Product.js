import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {

    console.log(props.product)
    //Distructuring Product
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const { img, name, seller, price, stock, star } = props.product;
    return (
        <div className='product'>

            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 style={{ color: 'blue', fontWeight: '400' }}>{name}</h4>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock- order soon</p>
                <p>Rating Star:{star}</p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='product-btn'>
                    {element} add to cart</button>

            </div>

        </div>
    );
};

export default Product;