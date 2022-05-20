import React, { Fragment } from 'react';
import './style/App.scss';
import {Route, Routes} from 'react-router-dom';
import Home from './components/hooks/Home';
import Product from './components/hooks/Product';
import Header from './components/template/Header';
import CreateProduct from "./components/hooks/CreateProduct";

function App() {
  return (
      <Fragment>
      <Header />
      <main className="container">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/create-product" element={<CreateProduct />} />
          </Routes>
      </main>
      </Fragment>
  );
}

export default App;
