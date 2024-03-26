import React from 'react'
import { Product } from '../../../interfaces'
import ProductCard from './ProductCard'

const ProductsDisplay = ({data} : {data: Product[]}) => {
  return (
    <section className="flex justify-center">
    <div className="grid grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 w-4/5 gap-1">
      {data.length > 0 &&
        data.map((product: Product) => (
          <ProductCard
            name={product.name}
            key={product.id}
            price={product.price}
            imageUrl={product.imageUrl}
            id={product.id}
            description={product.description}
            quantity={product.quantity}
            type={product.type}
          />
        ))}
    </div>
  </section>
  )
}

export default ProductsDisplay