"use client";

import React from "react";

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

export default function StarBorder({
  as: Component = "div",
  className = "",
  color = "#8b7355",
  speed = "6s",
  children,
}: StarBorderProps) {
  return (
    <Component className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute w-[300%] h-1/2 opacity-0 group-hover:opacity-70 bottom-[-12px] right-[-250%] rounded-[50%] z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-bottom ${speed} linear infinite alternate`,
        }}
      />
      <div
        className="absolute w-[300%] h-1/2 opacity-0 group-hover:opacity-70 top-[-12px] left-[-250%] rounded-[50%] z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-top ${speed} linear infinite alternate`,
        }}
      />
      <div className="relative z-[1]">{children}</div>
      <style jsx global>{`
        @keyframes star-bottom {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes star-top {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </Component>
  );
}
