import React, { useEffect, useState } from "react";
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
  UilMoon,
  UilSun
} from "@iconscout/react-unicons";
import Slide from '@mui/material/Slide';
import "../../App.css";
import useWindowResize from '../../hooks/useWindowResize'

function Navbar() {
  const { windowWidth } = useWindowResize();

  //------------------------------------START -> MENU SHOW & HIDE-------------------------
  const [navBarState, setNavBarState] = useState(false);

  /*===== MENU SATE CONTROL ======*/
  const handleClickNav = () => {
    setNavBarState(!navBarState);
  };

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    useEffect(() => {
      const sections = document.querySelectorAll('section[id]')

      function scrollActive(){
          const scrollY = window.pageYOffset

          sections.forEach(current =>{
              const sectionHeight = current.offsetHeight
              const sectionTop = current.offsetTop - 50;
              const sectionId = current.getAttribute('id')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
              }else{
                  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
              }
          })
      }
      window.addEventListener('scroll', scrollActive);
    })

    /*==================== DARK LIGHT THEME ====================*/ 
    const darkTheme = 'dark-theme'
    const currentTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useState(!currentTheme)

    const handleTheme = () => {
      setTheme(!theme);
    };

    if (theme) {
      document.body.classList.remove(darkTheme)
    } else {
      document.body.classList.add(darkTheme)
    }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Vanessa
        </a>

        {/*==================== Menu ====================*/}
        <Slide
        direction={
          windowWidth >= 768
          ? "down"
          : "up"
          }
          in={
          windowWidth >= 768
          ? true
          : navBarState
          } >
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link" onClick={handleClickNav}>
                  <UilEstate className="nav__icon" /> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link" onClick={handleClickNav}>
                  <UilUser className="nav__icon" /> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link" onClick={handleClickNav}>
                  <UilFileAlt className="nav__icon" /> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link" onClick={handleClickNav}>
                  <UilScenery className="nav__icon" /> Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link" onClick={handleClickNav}>
                  <UilMessage className="nav__icon" /> Contact Me
                </a>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={handleClickNav}>
              <UilTimes />
            </div>
          </div>
        </Slide>

        <div className="nav__btns">
          {/* Theme change button */}
          <span onClick={handleTheme}>
          {theme
          ? <UilMoon className="change-theme" id="theme-button" />
          : <UilSun className="change-theme" id="theme-button" />}
          </span>

          <div className="nav__toggle" id="nav-toggle" onClick={handleClickNav}>
            <UilApps />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
