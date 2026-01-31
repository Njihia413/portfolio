"use client";

import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
    const cursorOuterRef = useRef<HTMLDivElement>(null);
    const cursorInnerRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(null);
    const previousTimeRef = useRef<number>(null);
    
    // Position state (refs to avoid re-renders)
    const mousePosition = useRef({ x: 0, y: 0 });
    const outlinePosition = useRef({ x: 0, y: 0 });
    const isVisible = useRef(false);

    useEffect(() => {
        const cursorOuter = cursorOuterRef.current;
        const cursorInner = cursorInnerRef.current;
        
        // Hide if mobile
        if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
            return;
        }
        
        const animate = (time: number) => {
             if (previousTimeRef.current !== undefined) {
                // Smooth follow for outer circle
                // 0.15 is the speed/smoothness factor
                outlinePosition.current.x += (mousePosition.current.x - outlinePosition.current.x) * 0.2;
                outlinePosition.current.y += (mousePosition.current.y - outlinePosition.current.y) * 0.2;
                
                if (cursorOuter && cursorInner && isVisible.current) {
                    cursorOuter.style.transform = `translate(${outlinePosition.current.x}px, ${outlinePosition.current.y}px) translate(-50%, -50%)`;
                    cursorInner.style.transform = `translate(${mousePosition.current.x}px, ${mousePosition.current.y}px) translate(-50%, -50%)`;
                }
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        }
        
        const onMouseMove = (event: MouseEvent) => {
            mousePosition.current.x = event.clientX;
            mousePosition.current.y = event.clientY;
            
            // Initial positioning to prevent "flying in"
            if (!isVisible.current) {
                isVisible.current = true;
                outlinePosition.current.x = event.clientX;
                outlinePosition.current.y = event.clientY;
                if (cursorOuter) cursorOuter.style.visibility = "visible";
                if (cursorInner) cursorInner.style.visibility = "visible";
            }
        };

        const onMouseEnter = () => {
             if (cursorOuter) cursorOuter.classList.add("cursor-hover");
             if (cursorInner) cursorInner.classList.add("cursor-hover");
        };

        const onMouseLeave = () => {
             if (cursorOuter) cursorOuter.classList.remove("cursor-hover");
             if (cursorInner) cursorInner.classList.remove("cursor-hover");
        }
        
        // Attach interactive hover effects
        const attachHoverListeners = () => {
             const links = document.querySelectorAll("a, button, .cursor-pointer, input, textarea, .project-card");
             links.forEach(link => {
                 link.addEventListener("mouseenter", onMouseEnter);
                 link.addEventListener("mouseleave", onMouseLeave);
             });
        };

        requestRef.current = requestAnimationFrame(animate);
        window.addEventListener("mousemove", onMouseMove);
        
        // Use MutationObserver to handle dynamically added elements
        const observer = new MutationObserver(attachHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });
        
        // Initial attach
        attachHoverListeners();

        return () => {
             window.removeEventListener("mousemove", onMouseMove);
             if (requestRef.current) cancelAnimationFrame(requestRef.current);
             observer.disconnect();
             
             const links = document.querySelectorAll("a, button, .cursor-pointer");
             links.forEach(link => {
                link.removeEventListener("mouseenter", onMouseEnter);
                link.removeEventListener("mouseleave", onMouseLeave);
             });
        };
    }, []);

    return (
        <>
            <div ref={cursorOuterRef} className="mouse-cursor cursor-outer" />
            <div ref={cursorInnerRef} className="mouse-cursor cursor-inner" />
        </>
    );
};

export default CursorFollower;
