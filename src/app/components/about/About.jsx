"use client";

import { useState } from "react";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import about from "../../assets/images/about-banner.png";

export default function About() {
  const [expandedAccordion, setExpandedAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Professional Design",
      content:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
    },
    {
      title: "Top-Notch Support",
      content:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
    },
    {
      title: "Exclusive Assets",
      content:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
    },
  ];

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? -1 : index);
  };

  return (
    <section className="about" aria-labelledby="about-label">
      <div className="container">
        <figure className="about-banner">
          <Image
            src={about}
            width={800}
            height={580}
            loading="lazy"
            alt="about banner"
            className="w-100"
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle text-[#373669]" id="about-label">
            Why Choose Us?
          </p>

          <h2 className="h2 section-title ">
            We bring solutions to make life easier for our clients.
          </h2>

          <ul>
            {accordionItems.map((item, index) => (
              <li key={index} className="about-item">
                <div
                  className={`accordion-card ${
                    expandedAccordion === index ? "expanded" : ""
                  }`}
                  data-accordion
                >
                  <h3 className="card-title">
                    <button
                      className="accordion-btn"
                      onClick={() => toggleAccordion(index)}
                      data-accordion-btn
                    >
                      <IoChevronDown
                        aria-hidden="true"
                        className={`down ${
                          expandedAccordion === index ? "rotated" : ""
                        }`}
                      />
                      <span className="span h5">{item.title}</span>
                    </button>
                  </h3>

                  <p className="accordion-content">{item.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
