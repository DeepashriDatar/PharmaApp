import React from 'react';


const Home = ()=> {
  let defaultImg = "https://th.bing.com/th?q=Pharma+Manufacturing+Company&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247";

    return (
      <div className='container'>
        <h2> Welcome to Pharma App</h2>
        <br></br>
        <br></br>

        <img src={defaultImg} className="card-img-top" alt="..." />
                
      </div>
    )
  }

  export default Home;