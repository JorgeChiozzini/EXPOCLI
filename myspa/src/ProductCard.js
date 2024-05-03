import React from 'react';
import './ProductCard.css'; // Importe o arquivo de estilos para os cards

const ProductCard = ({ product }) => {
  const { image, name, description, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
