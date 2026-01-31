"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Improved image handling
import { certifications } from "@/data/certifications";

export default function Certifications() {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <div
      id="certifications"
      className="tmp-section-gapBottom banner-personal-portfolio signle-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb--50">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">Certificates</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                Professional Credentials
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 col-sm-12 col-12 tmp-scroll-trigger tmp-fade-in animation-order-3"
            >
              <div className="pricing-table-col-2 tmponhover certification-card">
                 <div className="cert-header">
                     {item.image && (
                         <div className="cert-logo">
                             <Image 
                               src={item.image} 
                               alt={`${item.title} logo`} 
                               width={400} 
                               height={220}
                               unoptimized
                             />
                         </div>
                     )}
                     <div className="cert-info">
                         <h3>{item.title}</h3>
                         <span className="issuer">{item.issuer}</span>
                     </div>
                 </div>
                 
                 {item.description && (
                     <p className="cert-description">{item.description}</p>
                 )}

                 <div className="cert-meta">
                     <i className="fa-regular fa-calendar" />
                     <span>Issued: {item.date}</span>
                 </div>
                 
                 {item.url && item.url !== "#" && (
                  <div className="cert-actions">
                      <Link
                        className="tmp-btn round btn-small btn-border hover-icon-reverse service-link-btn"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">View Credential</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-regular fa-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-regular fa-arrow-right" />
                          </span>
                        </span>
                      </Link>
                   </div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
