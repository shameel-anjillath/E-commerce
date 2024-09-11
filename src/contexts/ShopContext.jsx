import React, { createContext, useState } from "react";
import all_product from '../Components/assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems)
    }

    const removeCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotal = () => {
        let totalAmount = 0;
        for (const Items in cartItems) {
            if (cartItems[Items] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(Items))
                totalAmount += itemInfo.new_price * cartItems[Items]
            }
            return totalAmount;
        }
    }

    const getTotalCart = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
            return totalItem;
        }
    }

    const contextValue = { getTotal, all_product, cartItems, addToCart, removeCart, getTotalCart }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider