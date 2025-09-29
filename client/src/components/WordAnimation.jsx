import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getRandomOutside = (width, height) => {
  const side = Math.floor(Math.random() * 4);
  switch (side) {
    case 0:
      return { x: Math.random() * width, y: -100 };
    case 1:
      return { x: width + 100, y: Math.random() * height };
    case 2:
      return { x: Math.random() * width, y: height + 100 };
    default:
      return { x: -100, y: Math.random() * height };
  }
};

const WordAnimation = ({ letters, y, onComplete, stayTime = 3000 }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, stayTime + 2000);
    return () => clearTimeout(timer);
  }, [onComplete, stayTime]);

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        width: "100%",
        textAlign: "center",
        whiteSpace: "normal", // Cho phép xuống dòng
        // lineHeight: 1.2,
      }}
    >
      {letters.map((letter, i) => {
        const randomStart = getRandomOutside(screenWidth, screenHeight);
        const randomEnd = getRandomOutside(screenWidth, screenHeight);

        return (
          <motion.span
            key={i}
            style={{
              display: "inline-block",
              fontSize: `${Math.min(screenWidth, screenHeight) * 0.08}px`,
              fontWeight: "bold",
              color: "white",
              border: "1px solid black",
              backgroundColor: "black",
              opacity: 5,
              userSelect: "none",
              borderRadius: "10px",
              padding: "0px 2px",
              margin: "0 4px", // khoảng cách nhỏ giữa chữ
              fontFamily: '"Playfair Display", serif',
            }}
            initial={{ x: randomStart.x, y: randomStart.y, opacity: 0 }}
            animate={{
              x: [randomStart.x, 0, 0, randomEnd.x],
              y: [randomStart.y, 0, 0, randomEnd.y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              times: [0, 0.25, 0.75, 1],
              duration: 1.5 + stayTime / 1000 + 1.5,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </div>
  );
};

export default WordAnimation;
