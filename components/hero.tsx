"use client";
import React from "react";
import Image from "next/image";
import TyperComponent from "@/components/common/TyperComponent";

export default function Hero() {
  return (
    <div className="rpp-banner-two-area">
      <div className="container">
        <div className="banner-two-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-2">
              <div className="banner-right-content">
                  <div className="bg-benner-img-six">
                    <Image
                      className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                      alt="Maureen Njihia"
                      src="/assets/images/maureen_njihia.png"
                      width={531}
                      height={531}
                    />
                  </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-1 mt--100">
              <div className="inner">
                <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Hello
                </span>
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                  I&apos;m Maureen Njihia, I <br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent
                        strings={[
                        "build seamless user experiences.",
                        "create AI-powered solutions.",
                        "optimize for peak performance.",
                        "boost user adoption."
                        ]}
                      />
                    </span>
                  </span>
                </h1>
                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                  A <span>Software Engineer </span> passionate about crafting high-performance applications that users love. 
                  I combine strong design sensibilities with full-stack expertise to build scalable solutions that drive <span>measurable </span> impact.
                  
                </p>
                <div className="button-area-banner-two tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <a
                    className="tmp-btn hover-icon-reverse radius-round download-icon btn-hover-outline"
                    href="/assets/pdf/Maureen Njihia.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Download Resume</span>
                      <span className="btn-icon">
                        <i className="fa-regular fa-arrow-down" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-regular fa-arrow-down" />
                      </span>
                    </span>
                  </a>
                  <a
                    className="tmp-btn hover-icon-reverse radius-round btn-primary-outline ml--20"
                    href="#contact"
                    style={{ marginLeft: "20px" }}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Schedule a call</span>
                      <span className="btn-icon">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
