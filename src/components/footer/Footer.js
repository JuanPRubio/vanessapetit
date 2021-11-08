import React from "react";
import {
  UilFacebookF,
  UilInstagram,
  UilTwitterAlt,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Vanessa</h1>
            <span className="footer__subtitle">Writer, Editor, Translator</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfollio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/vanessa.petit.12"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <UilFacebookF className="" />
            </a>
            <a
              href="https://www.instagram.com/vanempetit/"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <UilInstagram className="" />
            </a>
            <a
              href="https://twitter.com/home"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <UilTwitterAlt className="" />
            </a>
          </div>
        </div>

        <p className="footer__copy">Made by JPR&#174; All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
