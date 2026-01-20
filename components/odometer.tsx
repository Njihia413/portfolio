"use client";

import React, { useEffect, useRef, useState } from "react";

const Odometer = ({ max }: { max: number }) => {
  const odometerRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const odometerInitRef = useRef<any>(null);

  useEffect(() => {
    import("odometer").then((OdometerModule) => {
      // Initialize Odometer or do something with it
      const OdometerLib = OdometerModule.default || OdometerModule;

      // Example usage of Odometer
      if (OdometerLib && odometerRef.current) {
        odometerInitRef.current = new OdometerLib({
          el: odometerRef.current,
          value,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (odometerRef.current && odometerInitRef.current) {
      odometerInitRef.current.update(value); // Update odometer when value changes
    }
  }, [value]);

  const startCountup = () => {
    setValue(max);
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const currentRef = odometerRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div ref={odometerRef} className="odometer">
        0
      </div>
    </>
  );
};

export default Odometer;
