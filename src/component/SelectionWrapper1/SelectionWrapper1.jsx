import './SelectionWrapper1.css'
import { useEffect, useState } from "react"
import {  Link } from "react-router-dom";
import SelectionProduct from '../SelectionProduct/SelectionProduct'


function SelectionWrapper1() {
    const [products , setProducts] = useState([
    
    ])
    useEffect(()=> {
        
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))

    })
    
    
    
    return(
        <div className="child2">
          {products.map((Product)=> {
            return(
               
                <Link className="productSection" to={`/Product/${Product.id}`}>
                    <SelectionProduct 
                    key ={Product.id}
               image = {Product.image}
                title = {Product.title}
                price ={Product.price}
                category={Product.category}

                ></SelectionProduct>

                </Link>    
            )
          } )}  
        </div>
    )
    
}
export default SelectionWrapper1