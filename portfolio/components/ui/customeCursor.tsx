'use client'

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleLinkHoverEvents = () => {
      const addHoverClass = () => setCursorVariant("hover");
      const removeHoverClass = () => setCursorVariant("default");

      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseover", addHoverClass);
        el.addEventListener("mouseout", removeHoverClass);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseover", addHoverClass);
          el.removeEventListener("mouseout", removeHoverClass);
        });
      };
    };

    return handleLinkHoverEvents();
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(0,200,200, 0.8)",
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(100, 100, 200, 0.5)",
      mixBlendMode: "difference" as const,
    },
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        .cursor {
          position: fixed;
          left: 0;
          top: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;