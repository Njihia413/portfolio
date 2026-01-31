"use client";

import React, { useState } from "react";
import Image from "next/image";
import { workItems, WorkItem } from "@/data/work";
import ProjectModal from "./project-modal";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: WorkItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation
  };

  return (
    <>
      <div id="work" className="rpp-banner-two-area tmp-section-gapBottom">
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
                    onClick={() => openModal(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="portfoli-card-img">
                      <div className="img-box v2">
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
                      </div>
                    </div>
                    <div className="portfolio-card-content-wrap">
                      <div className="content-left">
                        <h3 className="portfolio-card-title">
                          <span className="link">{item.title}</span>
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
                      <div className="tmp-arrow-icon-btn">
                        <div className="btn-inner">
                          <i className="tmp-icon fa-solid fa-arrow-up-right" />
                          <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
