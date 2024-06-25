import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductInfo = () => {
  const { id } = useParams();

  const [prodData, setprodData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/products?id=" + id).then((res) => {
      return res.json();
    }).then((data) => {
      setprodData(data[0]);
      console.log(prodData);
    }).catch((err) => {
      console.error('Error fetching data: ', err);
    });
  }, []);

  const addToCart = () => {


    fetch('http://localhost:8080/cart').then((res) => {
      return res.json();
    }).then((data) => {
      var prodExist = data.find((element) => element.id === id);
      if (prodExist) {
        alert("Product is already exist in the cart");
        return;
      }
      else {
        fetch("http://localhost:8080/cart", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: prodData.id, name: prodData.name, price: prodData.price, description: prodData.description })
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
  let defaultImg = "https://dims.apnews.com/dims4/default/e9dd673/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8e%2Fec%2Fa444ae76cdd64fa9ad5f2c67460a%2F67e4f10f96a042c3969c3797a50e9fa1"

  return (
    <div className="row">
      <h2 style={{ textAlign: "center", color: "red" }}>Product Info : {prodData.name}</h2>
      <br></br>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 border-single" style={{ border: "solid" }}>
          <img src={!prodData.image ? defaultImg : prodData.image} className="card-img-top" alt="..."
            style={{ width: "20rem", height: "20rem" }} />

          <h5> Description: {prodData.description}</h5>
          <br></br>
          <h5> Current price: {prodData.price} Rs.</h5>

          <br></br>
          <br></br>
          <Link className="btn btn-primary" to="/product-details"> Back to Product List</Link>
          <button className="btn btn-primary" style={{ float: "right" }} onClick={() => addToCart(prodData.id)}>Add to Cart</button>
          <br></br>
          <br></br>
        </div>
        <div className="col-md-4"></div>
        <br></br>
      </div>

    </div>
  )
}

export default ProductInfo;