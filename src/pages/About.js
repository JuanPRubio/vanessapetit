import React from 'react';
import AboutImg from "../images/about.jpg";
import AboutImg2 from "../images/about2.jpg";
import AboutImg3 from "../images/about3.jpg";
import VaneCV from "../assets/vanessapetitcv.pdf";
import { UilDownloadAlt } from '@iconscout/react-unicons'

function About() {
    return (
        <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Let me introduce myself</span>

        <div className="about__container container">

            <div className="about__data">
            <img src={AboutImg} alt="" className="about__img" />
                <p className="about__description">
                Vanessa Petit is a versatile bilingual writer, editor and translator with over 15 years of experience creating and translating content for online media outlets, national and international magazines and newspapers, social media platforms, book publishing, marketing campaigns and beauty companies. She is passionate about telling stories from unique angles and has a broad background that allows her to write about many different topics.
                </p>
                <img src={AboutImg2} alt="" className="about__img2" />
                <p className="about__description">
                She specializes in creative translation and transcreation helping brands find their voice and organizations and institutions create engaging and accurate translations in English and Spanish. Not all translation projects are created equal and she understands that it’s imperative to prioritize the idea behind the words to create high impact meaning that resonates with target audiences.
                Currently, her freelance stories have appeared in Marriott Bonvoy Traveler, What to Expect and Common Sense Media, among other outlets. She also works as a ghostwriter for StoryTerrace, where she writes biographies for and about regular people narrating their lives in book form. She also moonlights as a proofreader/copyeditor for marketing agencies and worked as a Bilingual Communications Specialist for Avon.</p>
                <br />
                <img src={AboutImg3} alt="" className="about__img" />
                <p className="about__description">
                Vanessa is a native English and Spanish speaker. She lived in Argentina for many years and received her master’s in Political Science from University of Belgrano, in Buenos Aires and her bachelor’s in Journalism from Catholic University of Buenos Aires. 
                Once she returned to the United States, she worked for The Associated Press, in Miami and then transferred to their New York office to work on the Latin American Desk. She eventually left the newsroom to work for Meredith Corporation as the Deputy Editor for Ser Padres Media Group, creating content for three Spanish language magazines that were first-to-market in the Hispanic parenting space in the United States. She covered topics across many platforms- print, online and social media- such as, values, education, culture and heritage, pregnancy, beauty, health, family finance, food and health. 
                Today she lives in New York with her husband and two children.
                </p>

                {/* <div className="about__info">
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
                </div> */}

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
