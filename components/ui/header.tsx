"use client";

import React from "react";
import Link from "next/link";
import Nav from "./nav";

interface HeaderProps {
  darkLogo?: string;
  lightLogo?: string;
}

export default function Header({
  darkLogo,
  lightLogo,
}: HeaderProps) {
  const openSidebar = () => {
    console.log("Sidebar opened");
  };

  const openMobilemenu = () => {
    console.log("Mobile menu opened");
  };

  return (
    <header className="tmp-header-area-start header-one header--sticky header--transparent">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
                <div className="logo">
                <Link href="/">
                  <span style={{ fontFamily: "var(--font-parisienne)", fontSize: "28px", fontWeight: "bold" }}>
                    <span className="color-primary">M</span>aureen <span className="color-primary">N</span>jihia
                  </span>
                </Link>
              </div>
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <Nav />
              </nav>
              <div className="tmp-header-right">
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      className="tmp-menu-bars tmp_button_active"
                      onClick={openSidebar}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      className="tmp-menu-bars humberger_menu_active"
                      onClick={openMobilemenu}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
