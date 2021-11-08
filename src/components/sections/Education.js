import React from "react";
import { UilCalendarAlt } from '@iconscout/react-unicons';

function Education() {
  return (
    <div>
      {/* <!--========================= QUALIFICATION CONTENT 1 =========================--> */}
      
        <div className="qualification__content">
          {/* <!--======================= QUALIFICATION 1 =======================--> */}
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">COVID-19 Contact Tracing</h3>
              <span className="qualification__subtitle">Coursera</span>
              <div className="qualification__calendar">
                <UilCalendarAlt className="qualification__icon" />
                may 2020
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          {/* <!--======================= QUALIFICATION 2 =======================--> */}
          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">
                Communication and Journalism
              </h3>
              <span className="qualification__subtitle">
                Argentina - Pontificia Universidad Católica Argentina
              </span>
              <div className="qualification__calendar">
                <UilCalendarAlt className="qualification__icon" />
                1999 - 2002
              </div>
            </div>
          </div>

          {/* <!--======================= QUALIFICATION 3 =======================--> */}
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">
                Master's Degree - Political Science and Government
              </h3>
              <span className="qualification__subtitle">
                Argentina - Universidad de Belgrano
              </span>
              <div className="qualification__calendar">
                <UilCalendarAlt className="qualification__icon" />
                1992 - 1997
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Education;
