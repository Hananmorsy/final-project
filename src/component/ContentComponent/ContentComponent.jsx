import { useState } from 'react'
import './ContentComponent.css'

function ContentComponent() {
    const [counter,setCounter] =useState(0)
    function Increment() {
        setCounter (counter+1)
    }
    function Decrement() {
        setCounter (counter-1)
        
    }
    return(
        <>
        <button onClick={Increment}>+</button>
        <label>{counter}</label>
        <button onClick={Decrement}>-</button>
        </>
    )
    
}
export default ContentComponent