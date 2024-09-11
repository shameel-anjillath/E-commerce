import React, { useContext } from 'react'
import './cartitem.css'
import { ShopContext } from '../../contexts/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItems, removeCart, getTotal } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='cartitemremove-icon' src={remove_icon} onClick={() => removeCart(e.id)} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>${getTotal()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotal()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <dic className="cartitems-promocode">
                    <p>If you have a promocode, Enter it here</p>
                    <div className="caritems-promobox">
                        <input type="text" placeholder='promocode' name="" id="" />
                        <button>Submit</button>
                    </div>
                </dic>
            </div>
        </div>
    )
}

export default CartItems
