import React, { useState } from 'react';
import { UilGraduationCap, UilBriefcaseAlt } from '@iconscout/react-unicons';
// import Grow from '@mui/material/Grow';
import Education from '../components/sections/Qualification/Education';
import Work from '../components/sections/Qualification/Work';

function Qualification() {
          //------------------------------------ START -> QUALI SHOW & HIDE -------------------------
          const [quotation, setQuotation] = useState(true);
      
        /*===== QUALI SATE CONTROL ======*/
        let handleClickQuotation = () => {
            setQuotation(!quotation)
        };
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex" onClick={() => handleClickQuotation()} style={{color: quotation? "var(--first-color)":""}} >
                        <UilGraduationCap className="qualification__icon" />
                        Education
                    </div>

                    <div className="qualification__button button--flex" onClick={() => handleClickQuotation()} style={{color: !quotation? "var(--first-color)":""}}>
                        <UilBriefcaseAlt className="qualification__icon" />
                        Work
                    </div>
                </div>

                <div className="qualification__sections">

                {quotation
                ? <Education />
                : <Work />
                }
                </div>
            </div>
        </section>
    )
}

export default Qualification
