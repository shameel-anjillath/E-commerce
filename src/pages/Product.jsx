import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import Productsdisplay from '../Components/Produtdisplay/Productsdisplay'
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox'
import RelatedProduct from '../Components/Relatedproducts/RelatedProduct'

const Product = () => {
    const { all_product } = useContext(ShopContext)
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product} />
            <Productsdisplay product={product} />
            <Descriptionbox />
            <RelatedProduct />
        </div>
    )
}

export default Product
