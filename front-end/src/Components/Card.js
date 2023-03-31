import React from 'react';
import mockProducts from '../mock/mockProducts';
import ProductCard from '../Attachment/ProductCard';

export default function Card() {
  return (
    <div>
      {
        mockProducts.map((i) => (
          <ProductCard
            key={ i.id }
            id={ i.id }
            name={ i.name }
            price={ i.price }
            urlImage={ i.url_image }
          />
        ))
      }
    </div>
  );
}