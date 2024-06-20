import React, { Component } from 'react'

export class Product extends Component {
  render() {
        
    let {name, description, imgUrl} = this.props;
    let defaultImg = "https://dims.apnews.com/dims4/default/e9dd673/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8e%2Fec%2Fa444ae76cdd64fa9ad5f2c67460a%2F67e4f10f96a042c3969c3797a50e9fa1"

           
    return (
        <div>
        <div className="card" style={{width: "18rem" }}>
            <img src={!imgUrl ? defaultImg: imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>{name}...</h5>
                    <p className="card-text"> {description}... </p>
                </div>
            </div>
        </div>
    )
  }
}


    
