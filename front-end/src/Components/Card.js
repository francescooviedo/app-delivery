import React, { useContext } from 'react';
import ProductCard from '../Attachment/ProductCard';
import MyContext from '../Context/MyContext';

export default function Card() {
  const { products } = useContext(MyContext);

  return (
    <div>
      {
        products.map((i) => (
          <ProductCard
            key={ i.id }
            id={ i.id }
            name={ i.name }
            price={ i.price }
            urlImage={ i.url_image }
          />
        ))
      }
      {
        console.log(products)
      }
    </div>
  );
}
