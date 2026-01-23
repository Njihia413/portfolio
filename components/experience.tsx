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
                    <ul className="description mt--20" style={{ maxWidth: "800px", color: "var(--color-body)", listStyle: "none", padding: 0 }}>
                      {item.description.map((desc, i) => (
                        <li key={i} style={{ marginBottom: "10px", display: "flex", alignItems: "flex-start" }}>
                          <span style={{ marginRight: "10px", color: "var(--color-primary)", marginTop: "3px", minWidth: "16px" }}>
                            <i className="fa-regular fa-check-circle" style={{ fontSize: "14px" }} />
                          </span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="skills-list mt--20 d-flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="badge"
                          style={{
                            background: "var(--background-color-2)",
                            color: "var(--color-primary)",
                            border: "1px solid var(--color-border)",
                            padding: "5px 15px",
                            borderRadius: "20px",
                            fontSize: "14px",
                            fontWeight: "500"
                          }}
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
