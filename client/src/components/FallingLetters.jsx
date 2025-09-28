
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ================= Background chữ mưa =================
const backgroundLetters = "ILOVEYOU".split("");

const BackgroundLetters = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const arr = Array.from({ length: 200 }).map(() => ({
      letter: backgroundLetters[Math.floor(Math.random() * backgroundLetters.length)],
      x: Math.random() * width,
      y: -Math.random() * height,
      duration: 4 + Math.random() * 6,
      size: 16 + Math.random() * 24,
    }));

    setLetters(arr);
  }, []);

  return (
    <>
      {letters.map((item, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            fontSize: item.size,
            color: "limegreen", // chữ mưa màu xanh lá
            fontWeight: "bold",
            userSelect: "none",
            opacity: 0.4,
          }}
          initial={{ y: item.y }}
          animate={{ y: window.innerHeight + 50 }}
          transition={{ duration: item.duration, repeat: Infinity, repeatType: "loop" }}
        >
          {item.letter}
        </motion.div>
      ))}
    </>
  );
};

// ================== Countdown 3-2-1 ==================
const Countdown = ({ onComplete }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      if (onComplete) onComplete();
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          key={count}
          className="absolute inset-0 flex items-center justify-center text-white font-bold"
          style={{ fontSize: "10rem" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {count}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// =============== Random vị trí ngoài màn hình ===========
const getRandomOutside = (width, height) => {
  const side = Math.floor(Math.random() * 4);
  switch (side) {
    case 0: return { x: Math.random() * width, y: -100 }; // trên
    case 1: return { x: width + 100, y: Math.random() * height }; // phải
    case 2: return { x: Math.random() * width, y: height + 100 }; // dưới
    default: return { x: -100, y: Math.random() * height }; // trái
  }
};

// =============== WordAnimation =================

const WordAnimation = ({ letters, y, onComplete, stayTime = 2000 }) => {
  const width = window.innerWidth;
  const letterSpacing = 80;

  const targetPositions = letters.map((_, i) => ({
    x: width / 2 - (letters.length * letterSpacing) / 2 + i * letterSpacing,
    y,
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, stayTime + 3000); // 1.5s vào + 3s đứng yên + 1.5s ra
    return () => clearTimeout(timer);
  }, [onComplete, stayTime]);

  return (
    <>
      {letters.map((letter, i) => {
        const randomStart = getRandomOutside(width, window.innerHeight);
        const randomEnd = getRandomOutside(width, window.innerHeight);

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              fontSize: "6rem",
              fontWeight: "bold",
              color: "white",
              userSelect: "none",
            }}
            initial={{ x: randomStart.x, y: randomStart.y, opacity: 0 }}
            animate={{
              x: [
                randomStart.x,
                targetPositions[i].x,
                targetPositions[i].x,
                randomEnd.x,
              ],
              y: [
                randomStart.y,
                targetPositions[i].y,
                targetPositions[i].y,
                randomEnd.y,
              ],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              times: [0, 0.25, 0.75, 1], // vào (25%) → giữ (50%) → ra (25%)
              duration: 1.5 + stayTime / 1000 + 1.5, // tổng: vào + đứng yên + ra
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.div>
        );
      })}
    </>
  );
};



// ================== Main Component ==================
const FallingLetters = () => {
  const [stage, setStage] = useState("countdown");

  const birthdayText = "HAPPY BIRTHDAY".split("");
  const nameText = "LÂM BỬU LINH".split("");

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-black">
      {/* chữ mưa background */}
      <BackgroundLetters />

      {stage === "countdown" && (
        <Countdown onComplete={() => setStage("birthday")} />
      )}

      {stage === "birthday" && (
        <WordAnimation
          letters={birthdayText}
          y={window.innerHeight / 3}
          stayTime={7000}
          onComplete={() => setStage("name")}
        />
      )}

      {stage === "name" && (
        <WordAnimation
          letters={nameText}
          y={window.innerHeight / 2}
          stayTime={4000}
        />
      )}
    </div>
  );
};

export default FallingLetters;

