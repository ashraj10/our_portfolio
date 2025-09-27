// components/Footer.jsx
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="cta" aria-label="call to action">
        <div className="container">
          <h2 className="h2 section-title">
            Join our community by using our services and grow your business.
          </h2>
          <Link href="#" className="btn btn-primary">
            Try it For Free
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container grid-list">
          <div className="footer-brand">
            <Link href="#" className="logo">
              ITAgency
            </Link>

            <p className="footer-text">
              &copy; 2022 codewithsadee. <br /> All rights reserved.
            </p>

            <ul className="social-list">
              <li>
                <Link href="#" className="social-link">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <FaDribbble />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Get in Touch</p>
            </li>
            <li>
              <address className="footer-text">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </address>
            </li>
            <li>
              <a href="mailto:info@email.com" className="footer-link">
                info@email.com
              </a>
            </li>
            <li>
              <a href="tel:001234567890" className="footer-link">
                00 (123) 456 78 90
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Learn More</p>
            </li>
            <li>
              <Link href="#" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Privacy Policy
              </Link>
            </li>
          </ul>

          <div className="footer-list">
            <p className="h4 footer-list-title">Our Newsletter</p>
            <p className="footer-text">
              Subscribe to our newsletter to get our news & deals delivered to
              you.
            </p>

            <form action="" className="input-wrapper">
              <input
                type="email"
                name="email_address"
                placeholder="Email Address"
                required
                className="input-field"
              />
              <button type="submit" className="submit-btn">
                Join
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
