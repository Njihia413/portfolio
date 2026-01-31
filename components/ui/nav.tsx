"use client";

import React from "react";
import { menuItems, MenuItem } from "@/data/menu";

// Filter out Home for desktop nav (logo serves as home link)
const desktopMenuItems = menuItems.filter(item => item.label !== "Home");

export default function Nav() {
  const [activeId, setActiveId] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      let current = "";
      
      // Iterate through menu items to find the active section
      for (const item of desktopMenuItems) {
        const id = item.href.replace("#", "");
        const element = document.getElementById(id);
        
        if (element) {
          const sectionTop = element.offsetTop;
          // Check if we've scrolled past the top of this section (minus offset)
          if (window.scrollY >= sectionTop - 180) {
            current = id;
          }
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ul className="tmp-mainmenu dark-content">
        {desktopMenuItems.map((item: MenuItem, index: number) => (
          <li
            key={index}
            className={`${item.hasDropdown ? "has-dropdown" : ""} ${activeId === item.href.replace("#", "") ? "is-active" : ""}`}
            style={activeId === item.href.replace("#", "") ? { color: "var(--color-primary)" } : {}}
          >
            <a href={item.href} className={activeId === item.href.replace("#", "") ? "active" : ""}>
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
            className={`${item.hasDropdown ? "has-dropdown" : ""} ${activeId === item.href.replace("#", "") ? "is-active" : ""}`}
          >
            <a href={item.href} className={activeId === item.href.replace("#", "") ? "active" : ""}>
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
