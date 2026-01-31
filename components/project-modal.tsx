"use client";

import React, { useEffect } from "react";
import { WorkItem } from "@/data/work";

interface ProjectModalProps {
  project: WorkItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };



  return (
    <div className="project-modal-backdrop" onClick={handleBackdropClick}>
      <div className="project-modal-container">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="project-modal-content">
          {/* Info Section */}
          <div className="project-modal-info">
            <div className="project-modal-header">
              <span className="subtitle">{project.subTitle}</span>
              <h2>{project.title}</h2>
            </div>
            
            {project.techStack && (
              <div className="tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="project-modal-body-text">
                {project.problem && (
                   <div className="mb-8">
                     <h3 className="section-title">The Challenge</h3>
                     <p>{project.problem}</p>
                   </div>
                )}
                
                {project.solution && (
                   <div className="mb-8">
                     <h3 className="section-title">The Solution</h3>
                     <p>{project.solution}</p>
                   </div>
                )}

                {project.features && (
                   <div className="mb-8">
                     <h3 className="section-title">Key Features</h3>
                     <ul className="feature-list">
                       {project.features.map((feature, i) => (
                         <li key={i}>
                           <span className="check-icon">
                             <i className="fa-regular fa-check-circle" />
                           </span>
                           <span>{feature}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                )}
                
                {/* Fallback description if no case study data */}
                {!project.problem && !project.solution && (
                  <p>{project.description}</p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
