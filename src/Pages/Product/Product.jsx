import {useParams } from "react-router-dom";
import {useState, useEffect } from "react"
import './Product.css'
import productLogo from '../../../public/assets/Group 87.png'
import Footer from '../../component/Footer/Footer'
import Counter from '../../component/ContentComponent/ContentComponent'


function Product() {
  const { id } = useParams();
  const [data , setData] = useState([
    
  ])
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>setData(json))

})
    return(
      <>
      <img className='photo4'src={productLogo}/>
      <div className='detailsData1'> 
      <div className="oneProduct">
                <div className="pic">
                <img  className='Product1'  src={data.image} />
                </div>
                <div className='det2'>
                    <h1>{data.title}</h1>
                    <label>{data.price}</label>
                  <label>{data.category}</label>
                  <p>Setting the bar as one of the loudest speakers in its class,
                     the Kilburn is a compact, stout-hearted hero with a well
                     -balanced audio which boasts a clear midrange and extended 
                     highs for a sound.
                    </p>
                    <div className="Cart">
                    <div className="count">
                    <Counter></Counter>
                    </div>
                    <button className="btnCart" >Add to Cart</button>
                    </div>
                   
                   
                </div>
               
            </div>
            <div><h1> description</h1></div>
            <div className="per">{data.description}</div>
              {id} </div>
         <Footer></Footer>
      </>
      
    )
}

export default Product;