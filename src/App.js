import React from 'react';
import './App.scss';
import Product from './ProductList/Product'
import Grid from './ProductList/Grid';

function App() {
  return (
    <Grid>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </Grid>
  );
}

export default App;
