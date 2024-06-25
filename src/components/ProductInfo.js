import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductInfo=()=>{
    const {id}=useParams();

    const [prodData,setprodData]=useState({});

    useEffect(()=>{
      fetch("http://localhost:8080/products?id="+id).then((res) => {
        return res.json();
      }).then((data) => {
        setprodData(data[0]);
        console.log(prodData);
      }).catch((err) => {
        console.error('Error fetching data: ', err);
      });
    },[]);

    const addToCart=()=>{
      console.log(prodData.id + " added to cart");
      console.log(prodData);

      fetch("http://localhost:8080/cart",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id:prodData.id, name:prodData.name, price:prodData.price, description:prodData.description})
      }).then((res)=>{
        return res.json();
      }).then((data)=>{
        console.log(data);
      }).catch((err)=>{
        console.error('Error fetching data: ', err);
      });
    }

    return(
        <div className="card">
            <h2>Product Info : {prodData.name}</h2>
            <br></br>
            <h3> Description: {prodData.description}</h3>
            <h3> Current price: {prodData.price}</h3>       

             <br></br>
             <button className="btn btn-primary" onClick={()=>addToCart(prodData.id)}>Add to Cart</button>
            <Link className="btn btn-primary" to="/product-details">Product List</Link>
            
         </div>
    )
}

export default ProductInfo;