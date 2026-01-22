"use client";

import Image from "next/image";
import Link from "next/link";
import { closeSidebar } from "@/utils/toggleSidebar";

export default function Sidebar() {
  return (
    <div className="d-none d-xl-block">
      <div className="tmp-sidebar-area tmp_side_bar">
        <div className="inner">
          <div className="top-area">
            <Link href="/" className="logo">
              <span style={{ fontFamily: "var(--font-parisienne)", fontSize: "24px", fontWeight: "bold", color: "#fff" }}>
                <span className="color-primary">M</span>aureen <span className="color-primary">N</span>jihia
              </span>
            </Link>
            <div className="close-icon-area">
              <button
                className="tmp-round-action-btn close_side_menu_active"
                onClick={closeSidebar}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="image-area-feature">
              <Link href="/">
                <Image
                  alt="Maureen Njihia"
                  src="/assets/images/maureen_njihia.jpg"
                  width={340}
                  height={340}
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </Link>
            </div>
            <h5 className="title mt--30">
              Software Engineer building seamless user experiences and AI-powered solutions.
            </h5>
            <p className="disc">
              Let&apos;s collaborate to turn your ideas into powerful, user-centric 
              applications that make a real difference.
            </p>
            <div className="short-contact-area">
              {/* Phone */}
              <div className="single-contact">
                <i className="fa-solid fa-phone" />
                <div className="information tmp-link-animation">
                  <span>Call Now</span>
                  <a href="tel:+254704592362" className="number">
                    +254 704 592 362
                  </a>
                </div>
              </div>
              {/* Email */}
              <div className="single-contact">
                <i className="fa-solid fa-envelope" />
                <div className="information tmp-link-animation">
                  <span>Email Me</span>
                  <a href="mailto:maureennjihia468@gmail.com" className="number">
                    maureennjihia468@gmail.com
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="single-contact">
                <i className="fa-solid fa-location-crosshairs" />
                <div className="information tmp-link-animation">
                  <span>Location</span>
                  <span className="number">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="social-wrapper mt--20">
              <span className="subtitle">Connect with me</span>
              <div className="social-link">
                <a href="https://www.linkedin.com/in/maureen-njihia/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="https://github.com/Njihia413" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="overlay_close_side_menu close_side_menu_active"
        onClick={closeSidebar}
        href="#"
      />
    </div>
  );
}
