import React, { useContext, useEffect } from 'react';
import ProductCard from '../Attachment/ProductCard';
import { requestData } from '../Helpers/productsGet';
import MyContext from '../Context/MyContext';

export default function Card() {
  const { products, setProducts } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestData();
      setProducts(data);
    };
    fetchData();
  }, [setProducts]);

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
