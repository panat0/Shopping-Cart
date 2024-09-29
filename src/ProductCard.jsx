import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 shadow-sm">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">Price: {product.price} THB</p>
      <button
        className="mt-4 bg-blue-500 text-white py-1 px-4 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
