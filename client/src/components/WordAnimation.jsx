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

const getRandomColor = () => {
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E9",
    "#F8C471",
    "#82E0AA",
    "#F1948A",
    "#85C1E9",
    "#D7BDE2",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomGradient = () => {
  const gradients = [
    "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
    "linear-gradient(45deg, #45B7D1, #96CEB4)",
    "linear-gradient(45deg, #FFEAA7, #DDA0DD)",
    "linear-gradient(45deg, #98D8C8, #F7DC6F)",
    "linear-gradient(45deg, #BB8FCE, #85C1E9)",
    "linear-gradient(45deg, #F8C471, #82E0AA)",
    "linear-gradient(45deg, #F1948A, #85C1E9)",
    "linear-gradient(45deg, #D7BDE2, #F8C471)",
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

const WordAnimation = ({
  letters,
  y,
  onComplete,
  stayTime = 3000,
  animationStyle = "fly", // fly, bounce, scale, twist
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [colors] = useState(letters.map(() => getRandomColor()));
  const [gradients] = useState(letters.map(() => getRandomGradient()));

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

  const getAnimationProps = (randomStart, randomEnd, index) => {
    const baseProps = {
      initial: { x: randomStart.x, y: randomStart.y, opacity: 0 },
      animate: {
        x: [randomStart.x, 0, 0, randomEnd.x],
        y: [randomStart.y, 0, 0, randomEnd.y],
        opacity: [0, 1, 1, 0],
      },
      transition: {
        times: [0, 0.25, 0.75, 1],
        duration: 1.5 + stayTime / 1000 + 1.5,
        ease: "easeInOut",
        delay: index * 0.1,
      },
    };

    switch (animationStyle) {
      case "bounce":
        return {
          ...baseProps,
          animate: {
            ...baseProps.animate,
            scale: [0, 1.2, 1, 0],
            rotate: [-180, 0, 0, 180],
          },
        };
      case "scale":
        return {
          ...baseProps,
          animate: {
            ...baseProps.animate,
            scale: [0, 1.5, 1, 0],
          },
        };
      case "twist":
        return {
          ...baseProps,
          animate: {
            ...baseProps.animate,
            rotate: [0, 360, 360, -360],
            scale: [0, 1, 1, 0],
          },
        };
      default:
        return baseProps;
    }
  };

  const getLetterStyle = (index) => ({
    display: "inline-block",
    fontSize: `${Math.min(screenWidth, screenHeight) * 0.06}px`,
    fontWeight: "bold",
    color: "white",
    backgroundColor: colors[index],
    background: gradients[index],
    border: `3px solid rgba(255,255,255,0.3)`,
    opacity: 5,
    userSelect: "none",
    fontFamily: '"Playfair Display", serif',
    padding: "12px 16px",
    margin: "4px",
    borderRadius: "20%",
    boxShadow: `
      0 6px 20px rgba(0,0,0,0.3),
      0 3px 10px rgba(0,0,0,0.2),
      inset 0 1px 0 rgba(255,255,255,0.4),
      inset 0 -2px 0 rgba(0,0,0,0.2)
    `,
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    transform: "translateZ(0)",
    position: "relative",
    minWidth: `${Math.min(screenWidth, screenHeight) * 0.08}px`,
    minHeight: `${Math.min(screenWidth, screenHeight) * 0.08}px`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        width: "100%",
        textAlign: "center",
        whiteSpace: "normal",
        lineHeight: 1.8,
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {letters.map((letter, i) => {
        const randomStart = getRandomOutside(screenWidth, screenHeight);
        const randomEnd = getRandomOutside(screenWidth, screenHeight);
        const animationProps = getAnimationProps(randomStart, randomEnd, i);

        return (
          <motion.span
            key={i}
            style={getLetterStyle(i)}
            {...animationProps}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 },
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
