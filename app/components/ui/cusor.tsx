"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function CursorCircle() {
  const [innerPos, setInnerPos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  const color = theme === "dark" ? "white" : "black";

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setInnerPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);

    document.body.style.cursor = "none";

    let animationFrame: number;
    const animateOuter = () => {
      setOuterPos((prev) => {
        const dx = innerPos.x - prev.x;
        const dy = innerPos.y - prev.y;
        const speed = 0.08; // tweak delay
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });
      animationFrame = requestAnimationFrame(animateOuter);
    };
    animationFrame = requestAnimationFrame(animateOuter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default";
      cancelAnimationFrame(animationFrame);
    };
  }, [innerPos]);

  return (
    <>
      {/* Outer circle */}
      <div
        className="fixed pointer-events-none z-[99999] w-[40px] h-[40px] rounded-full"
        style={{
          border: `2px solid ${color}`,
          left: outerPos.x - 20,
          top: outerPos.y - 20,
        }}
      />

      {/* Inner circle */}
      <div
        className="fixed pointer-events-none z-[99999] w-[20px] h-[20px] rounded-full"
        style={{
          backgroundColor: color,
          left: innerPos.x - 10,
          top: innerPos.y - 10,
        }}
      />
    </>
  );
}
