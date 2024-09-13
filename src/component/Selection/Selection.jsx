import { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom";
import './Selection.css'
import SeclectionItem from "../SeclectionItem/SeclectionItem";

function Selectiom() {
    const [arrayOfObjects , setArrayOfObjects] = useState([
        {
            id:1,
            selectionLogo :"/assets/Modern-Electronics-EC-.jpg",
            category: "electronics"
           
        },
        {
            id: 2,
            selectionLogo :"/assets/lrg_AC204B__41992.jpg",
            category: "jewelery"

        },
        {
            id: 3,
            selectionLogo :"/assets/56ac9c2218768315eda6e1f1acabe1d9.jpg",
            category: "men's clothing"

        },
        {
            id:4,
            selectionLogo :"/assets/istockphoto-1208148708-612x612.jpg",
            category: "women's clothing"
        }
    ])
    useEffect(()=> {
       
         /*   fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setArrayOfObjects(json))*/
            fetch("http://localhost:3000/Categories")  
            .then((response) =>{
                return response.json();
            })
            .then((result) => {
                setArrayOfObjects(result);
                
            })
            
    })
    
    return(
        <div className="child">
          {arrayOfObjects.map((Shop)=> {
            return(
               
                <Link className="productSection1" to={`/Shop/${Shop.id}`}>
                       <SeclectionItem 
                selectionLogo = {Shop.selectionLogo}
                category = {Shop. category}
                key ={Shop.id}
                ></SeclectionItem>
                </Link>    
            )
          } )}  
        </div>
    )
    
}
export default Selectiom