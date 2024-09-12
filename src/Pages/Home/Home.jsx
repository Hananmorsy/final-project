import './Home.css'
import mainLogo from '../../../public/assets/scandinavian-interior-mockup-wall-decal-background 1.png'
import Selection from '../../component/Selection/Selection'
import Information from '../../component/Information/Information'
import Footer from '../../component/Footer/Footer'
function Home () {
    return(
        <div className='maindiv'>
          <div> 
            <img id='logo3' src={mainLogo} />
           </div>
           <div className='Categoriesdiv'>
           <h1> Categories</h1> 
           <Selection></Selection>
           </div>
          <Information></Information>
          <Footer></Footer>
        </div>
       
    )
    
}
export default Home