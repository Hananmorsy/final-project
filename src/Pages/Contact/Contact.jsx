import'./Contact.css'
import Information from'../../component/Information/Information'
import Footer from '../../component/Footer/Footer'
import contactlogo from '../../../public/assets/Group 78.png'
import viclogo from '../../../public/assets/Vector.png'
import viclogo1 from '../../../public/assets/Vector (1).png'
import viclogo2 from '../../../public/assets/Vector (2).png'
import { useState } from 'react'

function Contact () {
    const [formData , setFormData]= useState({
        firstName: "",
        Email: "",
        subject: "",
        message: "",
    })
   function onHandleSubmit(event) {
    event.preventDefault();
   }
   function onHandleChange(event) {
    const value = event.target.value;
    const key  = event.target.value;

      setFormData({
    ...FormData,
    [key]: value,
   })
   }
 
    return(
        <>
        <img className='contactphoto'src={contactlogo} />
        <div className='contactdetails'>
            <div className='contacttext'>
                <h1>Get In Touch With Us</h1>
                <label>For More Information About Our Product & Services. 
                    Please Feel Free To Drop Us An Email.
                     Our Staff Always Be There To Help You Out. Do Not Hesitate!</label>
            </div>
            <div className='infrmationContact'>
                <div className='leftDiv'>
                <div className='datadiv'>
                    <div className='imgdiv'>
                    <img src={viclogo}/>
                    </div>
                      
                        <div className='address'>
                            <h2>Address</h2>
                            <label>236 5th SE Avenue, New </label>
                            <label>York NY10000, United </label>
                            <label>States</label>
                        </div></div>
                    <div className='datadiv'>
                    <div className='imgdiv'>
                            <img src={viclogo1}/>
                        </div>
                        
                        <div className='address'>
                            <h2>Phone</h2>
                            <label>Mobile: +(84) 546-6789
                            </label>
                            <label>Hotline: +(84) 456-6789</label>
                           
                        </div>
                    </div>
                    <div className='datadiv'>
                    <div className='imgdiv'>
                       <img src={viclogo2}/>
                       </div>
                        
                        <div className='address'>
                            <h2>Working Time</h2>
                            <label>Monday-Friday: 9:00 -  </label>
                            <label>22:00</label>
                            <label>Saturday-Sunday: 9:00 - </label>
                            <label>21:00</label>
                           
                        </div>
                    </div>
                       
                    </div>
                
                
                <form className='rightDiv' onSubmit={onHandleSubmit}>
                <label htmlFor='FirstName'>First Name</label>
                <input id='firstname' 
                     placeholder= 'abc'
                      value={formData.firstName}
                      name='firstName'
                      onChange={onHandleChange}
                ></input>
                 <br></br>
                <label htmlFor='Email'>Email address</label>
                <input id='Email' 
                     placeholder= 'Abc@def.com'
                      value={formData.Email}
                      name='Email'
                      onChange={onHandleChange}
                ></input>
                 <br></br>
                <label htmlFor='subject'>Subject</label>
                <input id='subject' 
                     placeholder= 'This is an optional'
                      value={formData.subject}
                      name='subject'
                      onChange={onHandleChange}
                ></input>
                 <br></br>
                 <label htmlFor='message'>Message</label>
                 <textarea
                 placeholder= 'Hi! i’d like to ask about'
                  name='message'
                  id='message' 
                  value={formData.message}
                  onChange={onHandleChange}
                 >  
                 </textarea>

                <button className='buttonSubmit'>Submit</button>
                </form>
            </div>
        </div>
        <Information></Information>
        <Footer></Footer>
        </>
        
    )
    
}
export default Contact