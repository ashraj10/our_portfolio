import React from "react";
import Image from "next/image";
import { IoCalendarOutline, IoDocumentTextOutline } from "react-icons/io5";

import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";

const projectCards = [
  {
    id: 1,
    src: blog1,
    alt: "Project 1",
    title: "Ligula tristique quis risus",
    text: "Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.",
    date: "14 Apr 2022",
    category: "Coding",
  },
  {
    id: 2,
    src: blog2,
    alt: "Project 2",
    title: "Nullam id dolor elit id nibh",
    text: "Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.",
    date: "29 Mar 2022",
    category: "Workspace",
  },
  {
    id: 3,
    src: blog3,
    alt: "Project 3",
    title: "Ultricies fusce porta elit",
    text: "Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.",
    date: "26 Feb 2022",
    category: "Meeting",
  },
];

export default function Projects() {
  return (
    <section className="section project" aria-labelledby="project-label">
      <div className="container">
        <p className="section-subtitle" id="project-label">
          Case Studies
        </p>
        <h2 className="h2 section-title">
          Check out some of our awesome projects with creative ideas and great
          design.
        </h2>

        <ul className="grid-list">
          {projectCards.map((project) => (
            <li key={project?.id}>
              <div className="project-card">
                <figure
                  className="img-holder"
                  style={{ "--width": 575, "--height": 550 }}
                >
                  <Image
                    src={project?.src}
                    width={575}
                    height={550}
                    alt={project?.alt}
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a href="#" className="card-title">
                      {project?.title}
                    </a>
                  </h3>
                  <p className="card-text">{project?.text}</p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <IoCalendarOutline aria-hidden="true" />
                      <time className="meta-text" dateTime={project?.date}>
                        {project?.date}
                      </time>
                    </li>
                    <li className="card-meta-item">
                      <IoDocumentTextOutline aria-hidden="true" />
                      <span className="meta-text">{project?.category}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
