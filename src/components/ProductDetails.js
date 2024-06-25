import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [productsToShow, filterProducts] = useState([]);
  const [products, setprodData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/products').then((res) => {
      return res.json();
    }).then((data) => {
      setprodData(data);
      filterProducts(data);
    }).catch((err) => {
      console.error('Error fetching data: ', err);
    });
  }, [])

  const showDetails = (id) => {
    navigate("/product-info/" + id);
  }

  const addToCart = (id) => {

    fetch('http://localhost:8080/cart').then((res) => {
      return res.json();
    }).then((data) => {
      var prodExist = data.find((element) => element.id === id);
      if (prodExist) {
        alert("Product is already exist in the cart");
        return;
      }
      else{
        var curProd = products.find((element) => element.id === id);    
        fetch("http://localhost:8080/cart", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: curProd.id, name: curProd.name, price: curProd.price, description: curProd.description })
        }).then((res) => {
          return res.json();
        }).then((data) => {
          alert("Item added to cart successfully");
        }).catch((err) => {
          console.error('Error fetching data: ', err);
        });        
      }
    });

  }
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('name-asc');

  const addFilter = (value) => {
    if (value) {
      setFilter(value);
      const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => (sort === 'price-asc' ? a.price - b.price : b.price - a.price));
      filterProducts(filteredProducts);
    } else {
      setFilter('');
      filterProducts(products);
    }
  }

  const sortData = (value) => {
    if (value) {
      setSort(value);
      var sortedProducts = products;

        sortedProducts = products.sort((a, b) => (value === 'price-asc' ? a.price - b.price : b.price - a.price));
        filterProducts(sortedProducts);
    }
  }
  let defaultImg = "https://dims.apnews.com/dims4/default/e9dd673/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8e%2Fec%2Fa444ae76cdd64fa9ad5f2c67460a%2F67e4f10f96a042c3969c3797a50e9fa1"

  return (
    <div className='container my-3'>
      <br></br>
      <h3> Product Details </h3>

      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => addFilter(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <select className="form-control" value={sort} onChange={(e) => sortData(e.target.value)}>

          <option value="name-asc">Sort by Name: A-Z</option>
          <option value="name-desc">Sort by Name: Z-A </option>
          <option value="price-asc">Sort by Price: Low to High</option>
          <option value="price-desc">Sort by Price: High to Low</option>
        </select>
      </div>

      <br></br>
      <br></br>

      <div className='row'>

        {productsToShow.map((element) => {

          return (
            <div className='col-md-3' key={element.id}>
              <div className="card" style={{ width: "18rem", height: "33rem"}}>
                <img src={!element.image ? defaultImg : element.image} className="card-img-top" alt="..." 
                style={{ width: "18rem", height: "18rem"}} />
                <div className="card-body">

                  <h5 className="card-title">
                    {`${element?.name ? element.name.length > 40 ? element.name.slice(0, 40) : element.name : ""} (Rs.  ${element.price} )`}
                  </h5>


                  <p className="card-text"> {`${element.description? element.description.length > 70 ? element.description.slice(0,70) : element.description :""}`}... </p>
                  <button className="btn btn-primary" onClick={() => { showDetails(element.id) }}>
                    Details
                  </button>
                
                  <button className="btn btn-primary" onClick={() => { addToCart(element.id) }} style={{float:"right"}}>
                    Add to Cart
                  </button>

                </div>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ProductDetails;