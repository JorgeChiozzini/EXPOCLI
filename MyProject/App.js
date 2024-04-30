import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

const App = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const products = [
    { id: 1, name: 'Hamburguer Clássico', description: 'Delicioso hambúrguer com queijo, alface e tomate.', price: 9.99, calories: 500, rating: 4.5, image: 'https://example.com/hamburguer.jpg' },
    { id: 2, name: 'Hamburguer Vegetariano', description: 'Hambúrguer vegetariano com abacate, cogumelos e rúcula.', price: 8.99, calories: 400, rating: 4.2, image: 'https://example.com/vegetarian-burger.jpg' },
    // Adicione mais produtos conforme necessário
  ];

  const handleProductPress = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cardápio</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
      />
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={handleCloseDetails} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
