import React from "react";
import Image from "next/image";
import Link from "next/link";
import { workItems } from "@/data/work";

export default function Work({ isLight = false }) {
  return (
    <div id="work" className="rpp-banner-two-area ">
      {/* Tpm Latest Portfolio Area Start */}
      <div className="custom-column-grid">
        <div className="container">
          <div className="section-head mb--60">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">Featured Work</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Projects I&apos;ve Built & Shipped
            </h2>
          </div>
          <div className="row">
            {workItems.map((item) => (
              <div className="col-lg-6 col-md-6" key={item.id}>
                <div
                  className={`latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-1 ${item.marginClass}`}
                >
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <Link
                        href={item.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          className="img-primary hidden-on-mobile"
                          alt={item.title}
                          width={item.width}
                          height={item.height}
                          src={item.url}
                          unoptimized
                        />
                        <Image
                          className="img-secondary"
                          alt={item.title}
                          width={item.width}
                          height={item.height}
                          src={item.url}
                          unoptimized
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      <h3 className="portfolio-card-title">
                        <Link
                          className="link"
                          href={item.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </Link>
                      </h3>
                      {item.subTitle && (
                        <span
                          className="subtitle"
                          style={{
                            fontSize: "14px",
                            display: "block",
                            marginBottom: "10px",
                            color: "var(--color-primary)",
                          }}
                        >
                          {item.subTitle}
                        </span>
                      )}
                      <p className="portfoli-card-para">{item.description}</p>
                    </div>
                    <Link
                      href={item.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tmp-arrow-icon-btn"
                    >
                      <div className="btn-inner">
                        <i className="tmp-icon fa-solid fa-arrow-up-right" />
                        <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
