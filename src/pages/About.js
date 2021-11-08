import React from 'react';
import AboutImg from "../images/about.jpg";
import VaneCV from "../assets/vanessapetitcv.pdf";
import { UilDownloadAlt } from '@iconscout/react-unicons'

function About() {
    return (
        <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <p className="about__description">
                A versatile bilingual writer, editor and translator with over 15
                years of experience.
                </p>
                <div className="about__info">
                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> experience</span>
                    </div>
                    
                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> experience</span>
                    </div>

                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> experience</span>
                    </div>
                </div>

                <div className="about__buttons">
                    <a download="vanesssapetitcv" href={VaneCV} className="button button--flex">
                    Download CV<UilDownloadAlt className="button__icon" />
                    </a>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About
