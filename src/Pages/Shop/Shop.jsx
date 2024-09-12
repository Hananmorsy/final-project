 import './Shop.css'
 import Shoplogo from '../../../public/assets/Group 78 (1).png'
 import Information from '../../component/Information/Information'
import Footer from '../../component/Footer/Footer'
import SelectionWrapper1 from '../../component/SelectionWrapper1/SelectionWrapper1'


function Shop () {
 
    return(
        <div className='shopdiv'>
            <div>
            <img className='shopPoto' src={Shoplogo} />
            </div>
            <div className='allProduct'>
              <SelectionWrapper1></SelectionWrapper1>
            </div>
            <Information></Information>
          <Footer></Footer>
        </div>
        
    
    )
    
}
export default Shop