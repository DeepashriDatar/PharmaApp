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

    return(
        <div className="card">
            <h2>Product Info : {prodData.name}</h2>
            <br></br>
            <h3> Description: {prodData.description}</h3>
            <h3> Current price: {prodData.price}</h3>       

             <br></br>
            <Link className="btn btn-primary" to="/product-details">Product List</Link>
            
         </div>
    )
}

export default ProductInfo;