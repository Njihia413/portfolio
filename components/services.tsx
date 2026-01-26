import React from "react";
import Link from "next/link";

import { services } from "@/data/services";

export default function Services() {
  return (
    <div
      id="services"
      className="tmp-service-area tmp-section-gapBottom banner-personal-portfolio signle-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb--50">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">Services</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                What I Can Do For You
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {services.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-6 col-sm-12 col-12 tmp-scroll-trigger tmp-fade-in animation-order-3"
            >
              <div className="pricing-table-col-2 tmponhover service-card-custom" style={{ transition: "transform 0.65s cubic-bezier(0.05, 0.2, 0.1, 1), box-shadow 0.65s cubic-bezier(0.05, 0.2, 0.1, 1)" }}>
                <div className="pricing-table-header" style={{ borderBottom: "none", marginBottom: "0", paddingBottom: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                   <h3 className="card-title text-center mb-4">
                     <i className={item.icon} style={{ fontSize: "50px", color: "var(--color-primary)" }}></i>
                  </h3>
                   <div className="top d-flex justify-content-center align-items-center mb-3">
                    <h4 className="text-center">
                      {item.title.split('|').map((part, index) => (
                        <React.Fragment key={index}>
                          {index > 0 ? <span className="d-block d-lg-inline">{part}</span> : part}
                        </React.Fragment>
                      ))}
                    </h4>
                  </div>
                </div>
                <p className="description text-center" style={{color: "white"}}>{item.description}</p>
                 <div className="discover-btn" style={{ marginTop: "auto", width: "100%" }}>
                     <Link
                       className="tmp-btn round btn-small btn-border hover-icon-reverse service-link-btn"
                       href="https://calendly.com/maureennjihia468/30min"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <span className="icon-reverse-wrapper">
                         <span className="btn-text">Schedule a Call</span>
                         <span className="btn-icon">
                           <i className="fa-sharp fa-regular fa-arrow-right" />
                         </span>
                         <span className="btn-icon">
                           <i className="fa-sharp fa-regular fa-arrow-right" />
                         </span>
                       </span>
                     </Link>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
