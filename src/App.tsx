import React, { Fragment } from 'react';
import './style/App.scss';
import {Route, Routes} from 'react-router-dom';
import Home from './components/hooks/Home';
import CustomPage from './components/hooks/CustomPage';
import Header from './components/template/Header';

function App() {
  return (
      <Fragment>
      <Header />
      <main className="container">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page" element={<CustomPage />} />
          </Routes>
      </main>
      </Fragment>
  );
}

export default App;
