import React from 'react';
import ProductCard from './ProductCard'; // Importe o componente ProductCard aqui
import './App.css';

const App = () => {
  // Dados dos produtos
  const productsData = [
    {
      id: 1,
      image: 'caminho/para/imagem1.jpg',
      name: 'Hamburguer Deluxe',
      description: 'Um delicioso hamburguer com queijo, alface, tomate e molho especial.',
      price: 'R$ 15,00',
    },
    {
      id: 2,
      image: 'caminho/para/imagem2.jpg',
      name: 'Batata Frita',
      description: 'Batatas crocantes e douradas, perfeitas para acompanhar seu lanche.',
      price: 'R$ 5,00',
    },
    {
      id: 3,
      image: 'caminho/para/imagem3.jpg',
      name: 'Refrigerante',
      description: 'Uma bebida gelada e refrescante para acompanhar sua refeição.',
      price: 'R$ 4,00',
    },
  ];

  return (
    <div className="app">
      <h1 className="title">Itens do cardápio delivery!</h1>
      <div className="product-grid">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
