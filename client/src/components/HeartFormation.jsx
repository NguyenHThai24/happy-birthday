import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeartFormation = ({ text, onComplete }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const count = text.length;
    const coords = [];

    // Lấy tâm màn hình
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Scale trái tim theo kích thước màn hình
    const scale = Math.min(window.innerWidth, window.innerHeight) / 25;

    for (let i = 0; i < count; i++) {
      const t = Math.PI - (i / count) * 2 * Math.PI;
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

      coords.push({
        x: centerX + x * scale,
        y: centerY - y * scale,
        char: text[i],
      });
    }

    setParticles(coords);

    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 5000);
    return () => clearTimeout(timer);
  }, [text, onComplete]);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{ x: p.x, y: p.y, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          style={{
            position: "absolute",
            fontSize: Math.min(window.innerWidth, window.innerHeight) * 0.04,
            fontWeight: "bold",
            color: "red",
          }}
        >
          {p.char}
        </motion.div>
      ))}
    </div>
  );
};

export default HeartFormation;
