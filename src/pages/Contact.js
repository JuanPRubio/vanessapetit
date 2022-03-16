import React from 'react';
import { UilPhone, UilEnvelopeEdit, UilMapMarker, UilMessage } from '@iconscout/react-unicons';

function Contact() {

    let form = document.getElementById('contact-form');

    console.log("form", form);

    const submmitForm = (e) => {
        e.preventDefault();
        form.submit()
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container">
                <div className="contact__wrapper">
                    {/* <a href="+1 (917) 330-1630" >
                        <div className="contact__information">
                            <UilPhone className="contact__icon" />

                            <div>
                                    <h3 className="contact__title">Call Me</h3>
                                    <span className="contact__subtitle">+1 (917) 330-1630</span>
                            </div>
                        </div>
                    </a> */}
                    
                    <a href="mailto:vpetitwork@gmail.com" >
                    <div className="contact__information">
                    <UilEnvelopeEdit className="contact__icon" />

                        <div>
                            <h3 className="contact__title">Email Me</h3>
                            <span className="contact__subtitle">vpetitwork@gmail.com</span>
                        </div>
                    </div>
                    </a>

                </div>
                {/* <div className="contact__wrapper">
                    <div className="contact__information">
                    <UilMapMarker className="contact__icon" />

                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Oceanside, New York</span>
                        </div>
                    </div>
                </div> */}

                {/* <form action="https://formsubmit.co/juanpablorubio94@gmail.com" method="POST" className="contact__form grid" id="contact-form">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Name</label>
                            <input type="text" className="contact__input" name="name" required />
                        </div>

                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Email</label>
                            <input type="email" className="contact__input" name="email" required />
                        </div>
                    </div>

                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Project</label>
                            <input type="text" className="contact__input" name="_subject" required />
                    </div>

                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Message</label>
                            <textarea cols="0" rows="5" className="contact__input" name="message" required ></textarea>
                            <input type="text" name="_honey" style={{display:'none'}}/>
                            <input type="hidden" name="_next" value="https://vanessapetitportfolio.netlify.app/"/>
                            <input type="hidden" name="_captcha" value="false"/>
                    </div>

                    <div>
                        <button type="submit" className="button button--flex" >
                            Send Message
                            <UilMessage className="button__icon" name="subscribe" />
                        </button>
                    </div>
                </form> */}
            </div>
        </section>
    )
}

export default Contact;
