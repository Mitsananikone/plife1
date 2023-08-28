/** @format */

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function MotionTest() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isPartiallyVisible = rect.top < windowHeight && rect.bottom >= 0;
        if (isPartiallyVisible) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
          });
        } else {
          controls.start({
            opacity: 0,
            y: 50,
            transition: { duration: 2 },
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div style={{ height: "150vh", paddingTop: "100vh" }}> 
      {/* The padding ensures that our motion component isn't visible on first load */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui nec turpis sagittis egestas. 
        Vivamus eget neque non orci condimentum interdum.
      </motion.div>
    </div>
  );
}
