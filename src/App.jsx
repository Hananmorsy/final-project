
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from"./Pages/Home/Home";
import Shop from"./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import Cart from './Pages/Cart/Cart';
import LayoutPages from "./Pages/LayoutPages/LayoutPages"
import Product from'./Pages/Product/Product'



function App() {
  
  return (
    <main>
       <BrowserRouter> 
     <Routes>
      <Route path="/" element={<LayoutPages />}>
      <Route path="Home" element={<Home/>}></Route>
      <Route path="Shop" element={<Shop/>}></Route>
      <Route path="Contact" element={<Contact/>}></Route>
      <Route path="Cart" element={<Cart/>}></Route>
      <Route path='/Shop/:id' element= {<Shop/>}></Route>
      <Route path='/Product/:id' element= {<Product/>}></Route>
      
      </Route>
     
     </Routes>
    </BrowserRouter>
    </main>
   
   
  )
}

export default App
