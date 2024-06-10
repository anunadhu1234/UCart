import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams}  from 'react-router-dom'
import Breadcrums from '../Breadcrums';
import ProductDisplay from '../ProductDisplay';
import DescriptionBox from '../DescriptionBox';
import RelatedProducts from '../RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id=== Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>

    </div>
  )
}

export default Product
