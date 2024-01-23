import React from 'react';

function Skills() {

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Areas of expertise</h2>
            <span className="section__subtitle">Services</span>

            <div className="skills__container container grid">
                <div>
                    {/* <!--=========================== SKILL 2 ===========================--> */}
                    <div className="skills__content">
                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Content Development Spanish/English</h3>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__entoes"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Translations/Transcreation </h3>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__transc"></span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Interviewing/Reporting</h3>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__transc"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Feature writing</h3>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__transc"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Proofreading</h3>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__transc"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Copyediting</h3>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__transc"></span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                    {/* <!--=========================== SKILL COL 2 ===========================--> */}
                <div>
                        <div className="skills__list grid">

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Newsletters</h3>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__editing"></span>
                                </div>
                            </div>
                        
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Book Translation</h3>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__editing"></span>
                                </div>
                            </div>
                            
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Adaptation/Localization</h3>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__proof"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Research & Fact Checking</h3>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__adapt"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Biography Drafting/writing</h3>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__adapt"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Social media/marketing campaigns</h3>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__adapt"></span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;
