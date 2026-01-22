"use client";
import { menuItems, MenuItem } from "@/data/menu";
import { closeMobilemenu } from "@/utils/toggleMobilemenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [activeParent, setActiveParent] = useState(-1);
  
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (menuRef.current && menuRef.current.contains(event.target as Node)) {
        if (innerRef.current && innerRef.current.contains(event.target as Node)) {
          // Click inside inner, do nothing
        } else {
          closeMobilemenu();
        }
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="d-block d-xl-none">
      <div ref={menuRef} className="tmp-popup-mobile-menu">
        <div ref={innerRef} className="inner">
          <div className="header-top">
            <div className="logo">
              <Link href="/" className="logo-area" onClick={closeMobilemenu}>
                <span style={{ fontFamily: "var(--font-parisienne)", fontSize: "24px", fontWeight: "bold", color: "#fff" }}>
                  <span className="color-primary">M</span>aureen <span className="color-primary">N</span>jihia
                </span>
              </Link>
            </div>
            <div className="close-menu">
              <button
                className="close-button tmp-round-action-btn"
                onClick={closeMobilemenu}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <ul className="tmp-mainmenu">
            {menuItems.map((item: MenuItem, index: number) => (
              <li
                key={index}
                className={`${item.hasDropdown ? "has-dropdown" : ""} ${
                  item.submenu
                    ? item.submenu.some(
                        (elm: MenuItem) =>
                          elm.href.split("/")[1] == pathname.split("/")[1]
                      )
                      ? "menu-item-open"
                      : ""
                    : ""
                }`}
              >
                {item.isLink ? (
                  <Link
                    className={`${
                      item.href.split("/")[1] == pathname.split("/")[1]
                        ? "active"
                        : ""
                    }`}
                    href={item.href}
                    onClick={closeMobilemenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => {
                      if (item.hasDropdown) {
                        setActiveParent((pre) => (pre == index ? -1 : index));
                      } else {
                        closeMobilemenu();
                      }
                    }}
                    className={activeParent == index ? "open" : ""}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <i className="fa-regular fa-chevron-down" />
                    )}
                  </a>
                )}

                {item.hasDropdown && (
                  <ul
                    className="submenu"
                    style={{
                      display: activeParent == index ? "block" : "none",
                    }}
                  >
                    {item.submenu?.map((subItem: MenuItem, subIndex: number) => (
                      <li key={subIndex}>
                        <Link
                          className={`${
                            subItem.href.split("/")[1] == pathname.split("/")[1]
                              ? "active"
                              : ""
                          }`}
                          href={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="social-wrapper mt--40">
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
          {/* social area end */}
        </div>
      </div>
    </div>
  );
}
