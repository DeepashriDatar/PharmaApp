import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProductDetails = ({addTocart})=> {


  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('Product added to cart:', product);
    setCart([...cart, product]);
};

  const products = [
        { 
          id: 1, 
          name: 'Akloflam TZ 100mg/2mg Tablet', 
          price: 50, 
          description: 'Akloflam TZ 100mg/2mg Tablet. dkjfk, skdhf fisojff eilsjf sf.', 
          image: 'https://th.bing.com/th/id/OIP.oGkf4Cn5wYxe5gO4XIkcwwHaIE?w=187&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
        },

        { 
          id: 2, 
          name: 'Artecare 150mg Injection', 
          price: 50, 
          description: 'Artecare 150mg Injection. Artecare 150mg Injection,  skdhf fisojff eilsjf sf.', 
          image: null, 
        },
        { 
          id: 3, 
          name: 'Cefigram 25mg Oral Drops', 
          price: 50, 
          description: 'Cefigram 25mg Oral Drops. Drops djfhdhf, skdhf fisojff eilsjf sf.', 
          image: null 
        },
        { 
          id: 4, 
          name: 'Clinzy 600mg Injection', 
          price: 50, 
          description: 'Akloflam TZ 100mg/2mg Tablet. dkjfk, skdhf fisojff eilsjf sf.', 
          image: 'https://th.bing.com/th/id/OIP.byV3V2UiuuWoxFOAntLBPwHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
        },
        { 
          id: 5, 
          name: 'Akloflam TZ 100mg/2mg Tablet', 
          price: 50, 
          description: 'Clinzy 600mg Injection. Along with this Clinzy 600mg Injection, skdhf fisojff eilsjf sf.', 
          image: 'https://th.bing.com/th/id/OIP.q2_UkffktpQOL230Dd1pAgHaGl?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
        },
        { 
          id: 6, 
          name: 'Epopod CV Syrup', 
          price: 50, 
          description: 'Epopod CV Syrup. Epopod CV Syrup dkeifj dkjfk, skdhf fisojff eilsjf sf.', 
          image: 'https://th.bing.com/th/id/OIP.wpNuSHjIqvGoqJeRMq3WHAHaIW?w=169&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
        },
        { 
          id: 7, 
          name: 'Fusicor 2% Cream', 
          price: 50, 
          description: 'Fusicor 2% Cream. Cream jjj, skdhf fisojff eilsjf sf.', 
          image: 'https://th.bing.com/th/id/OIP.cXkLlJMGwJE-Xm63YLGduwHaFj?w=253&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
        },
        {
          id: 8,
          name: 'Moxikor 5% Eye Drop',
          price : 50,
          description: 'Moxikor 5% Eye Drop',
          image: 'https://th.bing.com/th/id/OIP.0kXmPKB8mxpBmsxYolcubAHaH1?w=203&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        }
      ];
      
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('price-asc');

  const filteredProducts = products
  .filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
  .sort((a, b) => (sort === 'price-asc' ? a.price - b.price : b.price - a.price));


    let defaultImg = "https://dims.apnews.com/dims4/default/e9dd673/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8e%2Fec%2Fa444ae76cdd64fa9ad5f2c67460a%2F67e4f10f96a042c3969c3797a50e9fa1"
  
    return (
      <div className='container my-3'>
          <h3> Product Details </h3>

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

                  <button className="btn btn-primary" onClick={() => addToCart(element)}
                  >
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

ProductDetails.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;