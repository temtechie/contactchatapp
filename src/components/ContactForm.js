import React, { useRef, useState } from 'react'
import contactImage from '../assets/imagesee.jpg';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import ThankYouMessage from './ThankYouMessage';

const ContactForm = () => {
    const [successFulMessage, setSuccessFulMessage] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");



    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_axifkx4', 'template_0ki61dl', form.current, 'SRpKdu9kiIY6sjwMe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setSuccessFulMessage(true);
        setErrorMsg("Please enter valid email or password");

        setTimeout(() => {
            setSuccessFulMessage(false);
        }, 3000);

    }

    function showHidePassword() {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    return (
        <> 
         {!successFulMessage ? 
               <div className="container mt-4">
               <div className='d-flex justify-content-center'><h2>Get in Touch!</h2></div>
               <div className='row'>
                   <div className='col-md-6'>
                       <form ref={form} onSubmit={handleSubmit}>
                           <div className="form-group">
                               <label htmlFor="email">Email address</label>
                               <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                               <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                           </div>
                           <div className="form-group">
                               <label htmlFor="password">Password</label>
                               <input type="password" name="password" className="form-control" id="password" placeholder="Password" required />
                           </div>
                           <div className="form-check">
                               <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={showHidePassword}/>
                               <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
                           </div>
                           <button type="submit" className="btn btn-primary"
                           // onClick={handleSubmit}
                           >Submit</button>
                       </form>
                   </div>
                   <div className='col-md-6 '>
                       <img src={contactImage} alt='contactimage' className='contact-image' />
                   </div>
               </div>
           </div> :
           <ThankYouMessage />
         }
            
         
        </>

    )
}

export default ContactForm