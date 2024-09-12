import './Information.css'
import trophylogo from'../../../public/assets/trophy 1.png'
import guaranteelogo from '../../../public/assets/guarantee.png'
import shippinglogo from '../../../public/assets/shipping.png'
import customerlogo from '../../../public/assets/customer-support.png'
function Information() {
    return(
        <div className="Informationdiv">
        <div className='childdiv1'>
            <img className='highlogo' src={trophylogo}/>
            <div>
                <h3>High Quality</h3>
                <label>crafted from top materials</label>
            </div>
        </div>
        <div className='childdiv1'>
            <img className='highlogo' src={guaranteelogo}/>
            <div>
                <h3>Warranty Protection</h3>
                <label>Over 2 years</label>
            </div>
            
        </div>
        <div className='childdiv1'>
            <img className='highlogo' src={shippinglogo}/>
            <div>
                <h3>Free Shipping</h3>
                <label>Order over 150 $</label>
            </div>
        </div>
        <div className='childdiv1'>
            <img className='highlogo' src={customerlogo}/>
            <div>
                <h3>24 / 7 Support</h3>
                <label>Dedicated support</label>
            </div>
        </div>
       
        </div>
    )
    
}
export default Information