
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = "Lâm Bửu Linh ❤️".split("");

const getRandomLetter = () =>
  letters[Math.floor(Math.random() * letters.length)];

const FallingLetters = () => {
  const [countdown, setCountdown] = useState(3);
  const [showMessage, setShowMessage] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const [positions, setPositions] = useState([]);

  // Tạo mảng vị trí mỗi khi screenSize thay đổi
  useEffect(() => {
    if (screenSize.width === 0 || screenSize.height === 0) return;

    const arr = Array.from({ length: 500 }).map(() => {
      const startX = Math.random() * screenSize.width;

      return {
        startX,
        endX: startX, // không lệch, rơi thẳng
        startY: -Math.random() * screenSize.height,
        endY: screenSize.height + Math.random() * 200,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
        letter: getRandomLetter(),
      };
    });
    setPositions(arr);
  }, [screenSize]);

  // Countdown
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const timer2 = setTimeout(() => setShowMessage(true), 1000);
      return () => clearTimeout(timer2);
    }
  }, [countdown]);

  // Cập nhật khi resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen h-screen  overflow-hidden relative text-white">
      {/* Falling letters */}
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ y: pos.startY, x: pos.startX, opacity: 0 }}
          animate={{ y: pos.endY, x: pos.endX, opacity: 1 }}
          transition={{
            duration: pos.duration,
            delay: pos.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute text-[#000] font-bold"
        >
          {pos.letter}
        </motion.div>
      ))}

      {/* Countdown & Message */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-6xl font-extrabold text-[#060270] drop-shadow-lg"
        >
          {!showMessage
            ? countdown > 0
              ? countdown
              : ""
            : "🎉 HAPPY BIRTHDAY 🎉"}
        </motion.div>
      </div>
    </div>
  );
};

export default FallingLetters;

