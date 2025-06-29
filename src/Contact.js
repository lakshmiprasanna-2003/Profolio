import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {

    const[data, setData]=useState({
        name:"",
        email:"",
        text:"",

})

    const changeHandler=e=>{
        setData({...data, [e.target.name]:e.target.value})
        
    }

    const submitHandler=e=>{
        e.preventDefault();
        fetch('https://project-api-1bcd1-default-rtdb.firebaseio.com/data.json',
            {
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then (res=>alert('Data posted')).catch(err=>console.log(err))
    }

  return (
    <section id="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        
        {/* Contact Form */}
        <form className="contact-form" onSubmit={submitHandler}>
          <input type="text" name='name' onChange={changeHandler} placeholder="Your Name" required />
          <input type="email" name='email' onChange={changeHandler} placeholder="Your Email" required />
          <textarea rows="5" name='text' onChange={changeHandler} placeholder="Your Message" required></textarea>
          <button type="submit" >Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> lakshmiprasannadesireddy22@gmail.com</p>
          <p><i className="fab fa-github"></i> https://github.com/lakshmiprasanna-2003</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
