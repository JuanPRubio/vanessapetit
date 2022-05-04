import React, { useEffect, useRef } from "react";
import {
  UilLinkedinAlt,
  UilInstagram,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
} from "@iconscout/react-unicons";
import ProfileImg from "../images/profile.png";
import 'animate.css';
import { init } from 'ityped'

function Home() {
  
  const profession = useRef();
  const profession2 = useRef();
  useEffect(() => {
      init(profession.current, { showCursor: false, typeSpeed: 75,backSpeed: 60, loop: false , strings: ["Bilingual Writer, Copyeditor,"] });
      init(profession2.current, { showCursor: false, typeSpeed: 75,backSpeed: 60, startDelay: 3000, loop: false , strings: ["Proofreader, Translator"] });
    }
  )

  return (
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/vanessa-petit-662b3172/"
                target="_blank"
                rel="noreferrer"
                className="home__social-icon"
              >
                <UilLinkedinAlt />
              </a>

              <a
                href="https://www.instagram.com/vanessampetit/"
                target="_blank"
                rel="noreferrer"
                className="home__social-icon"
              >
                <UilInstagram />
              </a>

              {/* <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noreferrer"
                className="home__social-icon"
              >
                <UilTwitterAlt />
              </a> */}
            </div>

            <div className="home__img">
              {/* <Blob /> */}
              <svg
                className="home__blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />

                  <image
                    className="home__blob-img"
                    href={ProfileImg}
                    // y='25'
                    // x='-115'
                    y='2'
                    x='1'
                  />
                </g>
              </svg>
            </div>

            <div className="home__data">
              <h1 className="home__title">Hi, I'm Vanessa</h1>
              <h3 className="home__subtitle" ref={profession}>{" "}</h3>
              <h3 className="home__subtitle2" ref={profession2}>{" "}</h3>
              <a href="#contact" className="button button--flex">
                Contact Me <UilMessage className="button__icon" />
              </a>
            </div>
          </div>

          {/* <div className="animate__animated animate__shakeY animate__delay-4s animate__slow"> */}
            <a href="#about" className="home__scroll-button button--flex">
              <UilMouseAlt className="home__scroll-mouse" />
              <span className="home__scroll-name">Scroll down</span>
              <UilArrowDown className="home__scroll-arrow" />
            </a>
          {/* </div> */}
        </div>
      </section>
  );
}

export default Home;
