import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createCart, updateCart } from '../../store/cart';
import { useEffect } from 'react';
import './cart.css'
import { useHistory } from 'react-router-dom';

function CreateCart({product, isExist}) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [quantity, setQuantity] = useState(1)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const payload = {
            itemId: product.id,
            quantity
        }

        // if the item is not in your cart, then add this new item to your cart
        if (!isExist) {
            await dispatch(createCart(payload))
        // if the item is already in your cart, just update the quantity
        } else {
            const payload2 = {
                quantity: isExist.quantity + quantity
            }
            await dispatch(updateCart(isExist.id, payload2))
        }

        history.push('/carts')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>Quantity</div>
            <select
                name='quantity'
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                >
                {/* [...Array(11).keys()] is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */}
                {[...Array(11).keys()].slice(1).map((num) => (
                    <option
                        key={num}
                        value={num}
                    >
                        {num}</option>
                ))}
            </select>
            <button type='submit'>Add to cart</button>
        </form>
    )
    }

export default CreateCart;
