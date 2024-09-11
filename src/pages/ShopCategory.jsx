import React, { useContext } from 'react'
import './css/shopcategory.css'
import { ShopContext } from '../contexts/ShopContext'
import dropdown from '../Components/assets/dropdown_icon.png'
import Items from '../Components/items/Items'

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext)
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" width="100% " />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>

                <div className="shopcategory-sort">
                    Sort by <img src={dropdown} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null
                    }
                })}
            </div>
            <div className="shopcateogry-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory
