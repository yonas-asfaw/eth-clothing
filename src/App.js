import React from 'react';
import { Route, Routes, useParams, Link } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (

    <Routes>

      <Route exact path="/" Component={Homepage} />
      <Route exact path='/shop' Component={ShopPage} />


    </Routes>
  );
}

export default App;
