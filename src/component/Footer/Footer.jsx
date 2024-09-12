import './Footer.css'
import Button from '../Button/Button'

function Footer() {

    
    return(
        <div className='mainFooter'>
             <div className='footerdiv'>
            <div className='part1'>
                <h2>Funiro.</h2>
                <p>400 University Drive Suite 200 Coral  Gables, </p>
                <p>FL 33134 USA</p>
            </div>
            <div className='part2'>
                <label>Links</label>
                <Button></Button>
               
            </div>
            <div className='part2'>
               <label>Help</label>
               <label>Payment Options</label>
               <label>Returns</label>
               <label>Privacy Policies</label>
            </div>
            <div className='part4'>
                <label>Newsletter</label>
                <div className='email'>
                <label><u>Enter Your Email Address</u></label>
                <label><u>SUBSCRIBE</u></label>
                </div>
                
            </div>
           
        </div>
        <div className='hrdiv'>
        <hr/>
        <p>2023 furino. All rights reverved</p>
        </div>
        
        </div>
       
        
    
    )

}
export default Footer