
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('unset');

    const modalRemove = (e) => {
        e.target.style.display = 'none';
    }

    const sendEmail = (e) => {
        e.preventDefault();


        e.target.style.pointerEvents = 'none';
        e.target.style.opacity = '0.5';

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              e.target.style.pointerEvents = 'initial';
              e.target.style.opacity = '1';
              
              setMessageColor('text-primary');

              document.getElementById('modal').style.display = 'block';

              document.getElementById('modal').focus();

          }, (error) => {
              console.log(error.text);

              setMessageColor('text-danger');
              setMessage('Something went wrong!');
              setTimeout(() => {
                  setMessageColor('unset');
                  setMessage('');
              }, 5000);
          });
      };
    return (
        <div style={{paddingTop: '50px', paddingBottom: '80px', background: 'linear-gradient(-90deg, #9c9c9c60, darkgray)'}}>

            <div className="d-flex justify-content-center">
            <button id="modal" style={{border: '1px solid rgba(0, 0, 0, 0.3)', background: 'white',display: 'none', position: 'fixed', top: '50px', cursor: 'initial'}} className="w-50 shadow-lg rounded" onBlur={modalRemove}>
                <div className="my-4">
                    <p className={`pt-4 text-center ${messageColor}`}>Message sent successfully</p>
                    <button className="bg-light border rounded py-2 px-4" onClick={modalRemove}>Okay!</button>
                </div>
            </button>
            </div>

            <div className="d-flex justify-content-center mx-2 flex-wrap">
                <div style={{width: '400px', background: 'rgba(255, 255, 255, 0.7)'}} className="shadow px-4 py-5 rounded mx-5 mb-4">
                    <form className="d-flex flex-column mx-2" ref={form} onSubmit={sendEmail}>
                        <label className="mb-2"><strong>Name</strong></label>
                        <input style={{border: '1px solid rgba(0, 0, 0, 0.5)'}} className="px-2 py-1 px-md-3 py-md-2 rounded w-100 bg-light" type="text" placeholder="Enter your name.." name="name" required />
                        <label className="mt-4 mb-2"><strong>Email</strong></label>
                        <input style={{border: '1px solid rgba(0, 0, 0, 0.5)'}} className="px-2 py-1 px-md-3 py-md-2 rounded w-100 bg-light" type="email" placeholder="Enter your email.." name="email" required />
                        <p className={`mb-3 pt-4 ${messageColor}`}><span style={{visibility: 'hidden'}}>.</span>{message}</p>
                        <label className="mb-2"><strong>Message</strong></label>
                        <textarea style={{border: '1px solid rgba(0, 0, 0, 0.5)'}} className="px-2 py-1 px-md-3 py-md-2 rounded" placeholder="Drop your message.." style={{resize: 'none'}} name="message" rows="5" required />
                        <input className="mt-md-5 mt-4 py-md-3 py-2 w-100" type="submit" value="Send" />
                    </form>
                </div>

                <div className="">
                    <div className="m-3 mx-5 my-5 py-3">
                        <h1>Leave Us a Message</h1>
                        <p style={{maxWidth: '450px', minWidth: '220px'}}>Wanna reach out? So simple! fill out the form and your work is done. We are so responsive just as our site is with latest CSS and Bootstrap:3</p>
                        <div>
                            <div className="d-flex">
                                <div className="fs-1 text-highname">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="mx-3">
                                    <h4>Email Address</h4>
                                    <p>jobs4you.agency@gmail.com</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="fs-1 text-highname">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="mx-3">
                                    <h4>Phone Number</h4>
                                    <p>781-683-7262</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="fs-1 text-highname">
                                    <i className="fa-solid fa-location-pin"></i>
                                </div>
                                <div className="mx-3">
                                    <h4>Location</h4>
                                    <p>119/A, Boston, massachusetts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;