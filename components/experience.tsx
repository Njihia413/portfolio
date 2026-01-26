"use client";

import { resumeItems } from "@/data/experiences";
import React from "react";

export default function Experience() {
  return (
    <section className="resume-section tmp-section-gapTop tmp-section-gapBottom" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb-5">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">Experience</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                My Chapters of Growth
              </h2>
            </div>
            <div className="resume-widget">
              {resumeItems.map((item, index) => (
                <div
                  key={index}
                  className={`resume-single tmp-scroll-trigger tmp-fade-in animation-order-${
                    index + 1
                  } ${index === resumeItems.length - 1 ? "mb--0" : ""}`}
                >
                  <div className="resume-inner">
                    <div className="time">
                      <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15" />
                      {item.period}
                    </div>
                    <h3 className="resume-title">{item.role}</h3>
                    <div className="institute">{item.company}</div>
                    <ul className="resume-description-list">
                      {item.description.map((desc, i) => (
                        <li key={i}>
                          <span className="check-icon">
                            <i className="fa-regular fa-check-circle" />
                          </span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="skills-list mt--20 d-flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                         <span 
                           key={skillIndex} 
                           className="badge experience-skills-badge"
                         >
                           {skill}
                         </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
