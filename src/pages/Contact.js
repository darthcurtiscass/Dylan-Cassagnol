import React, { useState } from 'react';
import img from "../images/Number-three.jpg"

function Contact(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailValid(validateEmail(emailValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid) {
        window.location.reload()
      console.log('Form submitted:', firstName, lastName, email, inquiry);
    } else {
      console.log('Email is invalid');
    }
  };

  return (
    <div className="container text-center">
      <div className="row row-col mx-auto">
        <div style={{ 
            backgroundImage: `url(${img})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center', 
            backgroundRepeat: 'no-repeat' 
        }}>
          <br/><br/><br/><br/><br/>
          <div className="container-md">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <span className="input-group-text">First and last name</span>
                <input type="text" aria-label="First name" className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                <input type="text" aria-label="Last name" className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
              </div>
              <br/>
              <div className="mb-3 input-group">  
                <span className="input-group-text">Email Address</span>
                <input type="email" className={`form-control ${emailValid ? 'is-valid' : 'is-invalid'}`} id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleEmailChange} value={email} required/>
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div className="mb-3 input-group">
                <span className="input-group-text">Your Inquiry</span>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setInquiry(e.target.value)} value={inquiry}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br/>
            <br/>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Contact;
