"use client";

import React from "react";
import { menuItems, MenuItem } from "@/data/menu";

// Filter out Home for desktop nav (logo serves as home link)
const desktopMenuItems = menuItems.filter(item => item.label !== "Home");

export default function Nav() {
  return (
    <>
      <ul className="tmp-mainmenu dark-content">
        {desktopMenuItems.map((item: MenuItem, index: number) => (
          <li
            key={index}
            className={`${item.hasDropdown ? "has-dropdown" : ""}`}
          >
            <a href={item.href}>
              {item.label}
              {item.hasDropdown && (
                <i className="fa-regular fa-chevron-down" />
              )}
            </a>

            {item.hasDropdown && (
              <ul className="submenu">
                {item.submenu?.map((subItem: MenuItem, subIndex: number) => (
                  <li key={subIndex}>
                    <a href={subItem.href}>
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <ul className="tmp-mainmenu light-content">
        {desktopMenuItems.map((item: MenuItem, index: number) => (
          <li
            key={index}
            className={`${item.hasDropdown ? "has-dropdown" : ""}`}
          >
            <a href={item.href}>
              {item.label}
              {item.hasDropdown && (
                <i className="fa-regular fa-chevron-down" />
              )}
            </a>

            {item.hasDropdown && (
              <ul className="submenu">
                {item.submenu?.map((subItem: MenuItem, subIndex: number) => (
                  <li key={subIndex}>
                    <a href={subItem.href}>
                      {subItem.label}
                    </a>
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
