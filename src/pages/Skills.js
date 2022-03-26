import React, { useState } from 'react';
import { UilEnglishToChinese, UilAngleRight, UilFileEditAlt, UilEditAlt, UilSearch } from '@iconscout/react-unicons';
import Collapse from '@mui/material/Collapse';

function Skills() {
      //------------------------------------ START -> SKILLS SHOW & HIDE -------------------------
      const [skillsArray, setSkillArray] = useState({
      skill_1: false,
      skill_2: false,
      skill_3: false,
      skill_4: false
  });

  /*===== SKILLS SATE CONTROL ======*/
  const handleClickSkills = (name) => {
      let oldName = skillsArray[name]
    setSkillArray({
        // Full Array call, open only selected.
        ...skillsArray,
        [name] : !oldName
  })
};
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
                                        <h3 className="skills__name">Translations/ Transcreation </h3>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__transc"></span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Interviewing/ Reporting</h3>
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
                    {/* <div className="skills__content">
                        <div className="skills__header" onClick={() => handleClickSkills("skills_4")}>
                            <UilSearch className="skills__icon" />
                            
                            <div>
                                <h1 className="skills__titles">Proofreader</h1>
                            </div>

                            {skillsArray.skills_4
                            ?<UilAngleDown className="skills__arrow" style={{transform: "rotate(-180deg"}} />
                            :<UilAngleDown className="skills__arrow" />}
                        </div>

                        <Collapse in={skillsArray.skills_4} > */}
                        <div className="skills__list grid">

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Newsletter</h3>
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
                                    <h3 className="skills__name">Social media marketing campaigns</h3>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__adapt"></span>
                                </div>
                            </div>
                        </div>
                        {/* </Collapse>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
export default Skills;
