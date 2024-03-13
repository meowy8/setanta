"use client";
import { useEffect } from "react";

const ScrollHandler = () => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const windowHeight = window.innerHeight;
      const scrollAmount = event.deltaY;

      window.scrollBy({
        top: scrollAmount > 0 ? windowHeight : -windowHeight,
        left: 0,
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return null;
};

export default ScrollHandler;
