import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0, 0)} alt="" /></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-old-price">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Items
