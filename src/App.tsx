import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProductsList } from './components/ProductsList/ProductsList';
import { ProductPage } from './components/ProductPage/ProductPage';

function App() {
  return (
    <Routes>
        <Route path='/' element={ <ProductsList/> }/>
        <Route path='/:id' element={ <ProductPage /> }/>
    </Routes>
  );
}

export default App;
