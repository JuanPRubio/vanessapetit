import React from 'react';
import { UilPhone, UilEnvelopeEdit, UilMapMarker, UilMessage } from '@iconscout/react-unicons';

function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <a href="+1 (917) 330-1630" >
                        <div className="contact__information">
                            <UilPhone className="contact__icon" />

                            <div>
                                    <h3 className="contact__title">Call Me</h3>
                                    <span className="contact__subtitle">+1 (917) 330-1630</span>
                            </div>
                        </div>
                    </a>
                    
                    <a href="mailto:petit.vanessa@gmail.com" >
                    <div className="contact__information">
                    <UilEnvelopeEdit className="contact__icon" />

                        <div>
                            <h3 className="contact__title">Email Me</h3>
                            <span className="contact__subtitle">petit.vanessa@gmail.com</span>
                        </div>
                    </div>
                    </a>

                    <div className="contact__information">
                    <UilMapMarker className="contact__icon" />

                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Oceanside, New York</span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Name</label>
                            <input type="text" className="contact__input" />
                        </div>

                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Email</label>
                            <input type="email" className="contact__input" />
                        </div>
                    </div>

                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Project</label>
                            <input type="text" className="contact__input" />
                    </div>

                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Message</label>
                            <textarea name="" id="" cols="0" rows="5" className="contact__input"></textarea>
                    </div>

                    <div>
                        <a href="#" className="button button--flex">
                            Send Message
                            <UilMessage className="button__icon" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
