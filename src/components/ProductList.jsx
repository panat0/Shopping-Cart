import React from 'react';
import ProductCard from '../ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 200, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 300, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 150, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 400, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: 250, image: 'https://via.placeholder.com/150' },
  // เพิ่มสินค้าได้อีกตามความต้องการ
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
