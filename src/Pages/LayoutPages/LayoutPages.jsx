import { Outlet, Link } from "react-router-dom";
import './LayoutPages.css'
import MeubelLogo from '../../../public/assets/Meubel House_Logos-05.png'
import SkinClinicLogo from '../../../public/assets/SkinClinic.png'
import BasketLOgo from '../../../public/assets/ant-design_shopping-cart-outlined.png'
function LayoutPages() {
    return(
        <>
      <nav>
        <div className="Header">
            <div className="navlogo">
                <img id='logo1' src={MeubelLogo}/>
                <img id='logo2' src={SkinClinicLogo}/>
            </div>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li id='cart2'>
            <Link to="/Cart"> <img src={BasketLOgo}/></Link>
          </li>
        </ul>
        
        </div> 
       
       
      </nav>

      <Outlet />
    </>
    )
    
}
export default LayoutPages