"use client";
import React, { useEffect, useRef, useState } from "react";

const demostrings = ["Bank Account", "Web Payment", " Android & ISO"];

interface TyperComponentProps {
  className?: string;
  strings?: string[];
}

export default function TyperComponent({
  className = "theme-gradient",
  strings = demostrings,
}: TyperComponentProps) {
  // Fixed typo: activeSctingIndex -> activeStringIndex
  const [activeStringIndex, setActiveStringIndex] = useState(0);
  const typeitRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Initial width set
    if (typeitRef.current) {
      const visibleEl = typeitRef.current.querySelector(".is-visible");
      if (visibleEl) {
        typeitRef.current.style.width = visibleEl.scrollWidth + "px";
      }
    }

    // Fixed typo: reapetTyping -> repeatTyping
    const repeatTyping = setInterval(() => {
      if (typeitRef.current) {
        typeitRef.current.style.width = "0px";
      }

      setTimeout(() => {
        setActiveStringIndex((pre) => {
          if (pre === strings.length - 1) {
            return 0;
          } else {
            return pre + 1;
          }
        });
        setTimeout(() => {
          if (typeitRef.current) {
            const visibleEl = typeitRef.current.querySelector(".is-visible");
            if (visibleEl) {
              typeitRef.current.style.width = visibleEl.scrollWidth + "px";
            }
          }
        }, 10);
      }, 600);
    }, 3000);

    // Cleanup function to destroy the Typed instance
    return () => {
      clearInterval(repeatTyping);
    };
  }, [strings]);

  return (
    <span ref={typeitRef} className="cd-words-wrapper typeanimation">
      {strings.map((elm, i) => (
        <b
          key={i}
          className={`${className} ${
            activeStringIndex === i ? "is-visible" : "is-hidden"
          } `}
        >
          {elm}
        </b>
      ))}
    </span>
  );
}
