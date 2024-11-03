import React, { useContext } from 'react'
import PropTypes from 'prop-types';

import Product from './Product';
import { ProductContext } from '../../context/ProductContext';

const Products = () => {
  const { products } = useContext(ProductContext);

  if (products.length === 0) {
    <p>There is no prodcuts available</p>
  }
  return (
    <div>
      <section>
        {products.map((product) => <Product product={product} key={product.productID} />)}
      </section>
    </div>
  )
};

Products.prototype = {
  products: PropTypes.array
}

export default Products;
