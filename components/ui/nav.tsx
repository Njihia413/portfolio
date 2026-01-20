"use client";

import React from "react";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
  isLink?: boolean;
  hasDropdown?: boolean;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/", isLink: true },
  { label: "About", href: "/about", isLink: true },
  { label: "Services", href: "/services", isLink: true },
  { label: "Portfolio", href: "/portfolio", isLink: true },
  { label: "Contact", href: "/contact", isLink: true },
];

const menuItemsLight: MenuItem[] = [
  { label: "Home", href: "/", isLink: true },
  { label: "About", href: "/about", isLink: true },
  { label: "Services", href: "/services", isLink: true },
  { label: "Portfolio", href: "/portfolio", isLink: true },
  { label: "Contact", href: "/contact", isLink: true },
];

export default function Nav() {
  return (
    <>
      <ul className="tmp-mainmenu dark-content">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${item.hasDropdown ? "has-dropdown" : ""}`}
          >
            <Link href={item.href}>
              {item.label}
              {item.hasDropdown && (
                <i className="fa-regular fa-chevron-down" />
              )}
            </Link>

            {item.hasDropdown && (
              <ul className="submenu">
                {item.submenu?.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.href}>
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <ul className="tmp-mainmenu light-content">
        {menuItemsLight.map((item, index) => (
          <li
            key={index}
            className={`${item.hasDropdown ? "has-dropdown" : ""}`}
          >
            <Link href={item.href}>
              {item.label}
              {item.hasDropdown && (
                <i className="fa-regular fa-chevron-down" />
              )}
            </Link>

            {item.hasDropdown && (
              <ul className="submenu">
                {item.submenu?.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.href}>
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
