import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

const ProductDetails = ({addTocart})=> {
  const [products, setprodData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/products').then((res) => {
      return res.json();
    }).then((data) => {
      setprodData(data);
    }).catch((err) => {
      console.error('Error fetching data: ', err);
    });
  }, [])

  const showDetails = (id) => {
    navigate("/product-info/"+id);
  }

  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('price-asc');

  const filteredProducts = products
  .filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
  .sort((a, b) => (sort === 'price-asc' ? a.price - b.price : b.price - a.price));


    let defaultImg = "https://dims.apnews.com/dims4/default/e9dd673/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8e%2Fec%2Fa444ae76cdd64fa9ad5f2c67460a%2F67e4f10f96a042c3969c3797a50e9fa1"
  
    return (
      <div className='container my-3'>
          <h3> Product Details </h3>

          <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select className="form-control" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="price-asc">Sort by Price: Low to High</option>
            <option value="price-desc">Sort by Price: High to Low</option>
          </select>
        </div>

        <div className='row'> 
                       
          {products.map((element)=>{
            
            return(
            <div className='col-md-4' key={element.id}>
                {/* <Product  
                name={`${element?.name ? element.name.length > 40 ? element.name.slice(0,40) : element.name: ""} (Rs.  ${element.price} )` }                
                //title={!element?.title ? element.title.length > 40 ? element.title.slice(0,40) : element.title: ""} 
                description={element.description ? element.description !== null ? element.description.length > 60 ? element.description.slice(0,60) : element.description : "": ""}                 
                imgUrl={element.image} 
                productId={element.id}
                wholeProduct={element}
                /> */}

              <div className="card" style={{width: "18rem" }}>
                <img src={!element.image ? defaultImg: element.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      
                    <h5 className="card-title">
                        {`${element?.name ? element.name.length > 40 ? element.name.slice(0,40) : element.name: ""} (Rs.  ${element.price} )` }                    
                    </h5> 
                        
                      
                        <p className="card-text"> {element.description}... </p>
                        <button className="btn btn-primary" onClick={() => {showDetails(element.id)}}>
                          Details
                          </button>

                        {/* <button className="btn btn-primary" onClick={() => {addToCart}}>
                          Add to Cart
                        </button>
                   */}
                  </div>
              </div>

            </div>
            )
          })} 
        </div>
      </div>
  );
};
ProductDetails.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;