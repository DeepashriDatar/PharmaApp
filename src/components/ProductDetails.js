import React, { Component } from 'react'
import { Product } from './Product';

export class ProductDetails extends Component {

  
  constructor(){
    super();

    this.state={
      "products": [
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
          image: 'data:image/jpeg;base64,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', 
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
      ],
      "loading": false,
      "page":1,
      "totalCount":0
        } 
  }

  render() {
    return (
      <div className='container my-3'>
          <h3> Product Details </h3>

        <div className='row'> 
                       
          {this.state.products.map((element)=>{
            
            return(
            <div className='col-md-4' key={element.id}>
                <Product  
                name={`${element?.name ? element.name.length > 40 ? element.name.slice(0,40) : element.name: ""} (Rs.  ${element.price} )` }                
                //title={!element?.title ? element.title.length > 40 ? element.title.slice(0,40) : element.title: ""} 
                description={element.description ? element.description !== null ? element.description.length > 60 ? element.description.slice(0,60) : element.description : "": ""}                 
                imgUrl={element.image} 
                productId={element.id}
                //wholeProduct={element}
                />
            </div>
            )
          })} 
        </div>
      </div>
    )
  }
}

export default ProductDetails
