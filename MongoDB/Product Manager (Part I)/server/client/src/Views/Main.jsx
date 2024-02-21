import React, { useEffect, useState } from 'react'
import ProductList from '../Components/ProductList';
import Product from '../Components/Product';
import axios from 'axios';
    
const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[product]);
 
    return (
        <div>
           <Product/>
           <hr/>
           {loaded && <ProductList product={product}/>}
        </div>
    )
}
    
export default Main;

