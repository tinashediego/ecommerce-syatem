import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function HomeScreen(props){
  const [productsd , setProduct] = useState( [] );
  
  useEffect(() => {
    
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProduct(data);
    }

    fetchData();
  }, [])

    return(
        <div> <ul className="products">
        {
          productsd.map(product=>
            <li>
            <div className="product">
                <Link to={'/product/'+product._id}><img className="product-image" src={product.image} alt="product"></img></Link>
          <div className="product-name"><Link to={'/product/'+product._id}>{product.name}</Link></div>
          <div className="brand-name">{product.brand}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">{product.ratings}</div>
            </div>
        </li>
          )
        }
    </ul></div>
    )
}

export default HomeScreen;