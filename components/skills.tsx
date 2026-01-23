import React from "react";
import Image from "next/image";
import { skills } from "@/data/skills";


export default function Skills() {
  return (
    <div className="tmp-service-area tmp-section-gapBottom banner-personal-portfolio signle-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb--50">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">Skills</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                Technologies I Work With
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-2 skills-wrapper text-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {skills.map((item, index) => (
            <div className="col" key={index}>
              <div className={`skill-style-border-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}>
                <div className="skill-inner">
                  <Image
                    alt={item.alt}
                    src={item.src}
                    width={item.width}
                    height={item.height}
                  />

                  <p className="name">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
