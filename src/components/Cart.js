import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

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

  const removeFromCart = (id) => {
      if (id !== null && id !== undefined) {
      if (window.confirm("Are you sure you want to remove this item from cart?")) {
        fetch("http://localhost:8080/cart/" + id, {
          method: 'DELETE',
        }).then((res) => {
          return res.json();          
        }).then((data) => {
          alert("Item removed from cart successfully");
          window.location.reload();
          setCart(cartData.filter((element) => element.id !== id));
          
          window.location.reload();
        }).catch((err) => {
          console.error('Error fetching data: ', err);
        });
      }
    }
  }
  return (
    <div className='container my-3'>
      <h3> My Cart Details </h3>
      <div className='row'>

        {cartData.map((element) => {

          return (
            <div className='col-md-4' key={element.id}>
              <div className="card" style={{ width: "18rem" }}>
                {/* <img src={!element.image ? defaultImg: element.image} className="card-img-top" alt="..." /> */}
                <div className="card-body">

                  <h5 className="card-title">
                    {`${element?.name ? element.name.length > 40 ? element.name.slice(0, 40) : element.name : ""} (Rs.  ${element.price} )`}
                  </h5>
                  <p className="card-text"> {element.description}... </p>
                  <button className="btn btn-primary" onClick={() => {removeFromCart(element.id)}}>Remove from Cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <br></br>

      <Link className="btn btn-primary" to="/product-details">Product List</Link>

    </div>
  )
}

export default Cart;
