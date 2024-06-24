import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductInfo from './components/ProductInfo';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

const AppRouter = () => {
  const [cartData, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cart").then((res) => {
      return res.json();
    }).then((data) => {
      setCart(data);
    }).catch((err) => {
      console.error('Error fetching data: ', err);
    });
  }, []);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Pharma App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product-details">Product List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart ({cartData? cartData.length: 0})</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-info/:id" element={<ProductInfo  />} />
          <Route path="/product-details" element={<ProductDetails  />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;