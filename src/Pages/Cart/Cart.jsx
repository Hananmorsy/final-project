import Cartlogo from '../../../public/assets/Rectangle 1.png'
import './Cart.css'
import Information from '../../component/Information/Information'
import Footer from '../../component/Footer/Footer'
import { useState,useEffect } from 'react'
function Cart() {
    const[object,setObject]=useState ([

    ])
    useEffect(()=> {
    fetch('https://fakestoreapi.com/carts/5')
            .then(res=>res.json())
            .then(json=>setObject(json))
    })
    return( 
        <>
        <img className='cartPhoto'src={Cartlogo} />
        <div className='cartDiv'>
            <div className='leftCart'> 
                <div className='detCart'>
                <label>Product</label>
                    <label>Price</label>
                    <label>Quantity</label>
                    <label>Subtotal</label>
                </div>
                <div className='infoapi'>
                    <label>{object.product}</label>
                    <label>{object.Price}</label>
                    <label>{object.quantity}</label>
                    <label>{object.date}</label>
                </div>
            </div>
            <div className='rightCart'>
           <h1>Cart Totals</h1>
          <div> <label>Subtotal</label>
          <label>Rs. 250,000.00</label></div>
          <div> <label>Total</label>
          <label>Rs. 250,000.00</label></div>
           <button className='btntotal'>Check Out</button>
            </div>
           
        </div>
        <Information></Information>
        <Footer></Footer>
        </>
    )
    
}
export default Cart