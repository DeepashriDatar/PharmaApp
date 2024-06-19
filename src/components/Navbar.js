import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Add Navbar code from bootstrap line no 15

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
         
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pharma</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/productDetails">Product Details</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/cart">My Cart</Link>
                    </li>
                    
                </ul>
                
                </div>
            </div>
            </nav>
      </div>
    )
  }
}

export default Navbar
