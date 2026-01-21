"use client";
import React from "react";
import Odometer from "./odometer";
import { counters } from "@/data/facts";

export default function Facts() {
  return (
    <section className="counter-area tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb-5">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">Professional Impact</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                Proven Results That Drive Business Growth
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="year-of-expariance-wrapper bg-blur-style-one tmp-scroll-trigger tmp-fade-in animation-order-1">
              <div className="year-expariance-wrap">
                {/* <h2 class="year-number"><span class="counter">25 </span> </h2> */}
                <h2 className="counter year-number">
                  <Odometer max={2} />
                  <span className="">+</span>
                </h2>
                <h3 className="year-title">
                  Years Of <br />
                  experience
                </h3>
              </div>
              <p className="year-para">
                I deliver user-focused, business-aligned solutions for startups and established companies in Kenya and remotely.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="counter-area-right-content">
              <div className="row g-5">
                {counters.map((item, index) => (
                  <div className="col-lg-6 col-sm-6 col-12" key={index}>
                    <div
                      className={`counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.order}`}
                    >
                      <h3 className="counter counter-title">
                        <Odometer max={item.count} />
                        {item.suffix}
                      </h3>
                      <p className="counter-para">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
