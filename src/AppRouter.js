import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'
import Cart from './components/Cart'

export class AppRouter extends Component {
    render() {
        return (
        <>
            <BrowserRouter>
                <Navbar />
                    <div>
                    <Routes>
                        <Route path="/~" element={<Home />}></Route>
                        <Route path="/productDetails" element={<ProductDetails />}></Route>
                        <Route path="/cart/" element={<Cart />}></Route>
                    </Routes>
                    </div>
            </BrowserRouter>
        </>
        )
    }
}

export default AppRouter
