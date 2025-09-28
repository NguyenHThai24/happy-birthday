import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Chữ chính
const initialLetters = "NGUYỄN HOÀNG THÁI".split("");
const birthdayText = "HAPPY BIRTHDAY".split("");
const nameText = "LÂM BỬU LINH".split("");

// Nền mưa chữ
const backgroundLetters = "I LOVE YOU".split("");

// Lấy vị trí ngẫu nhiên
const getRandomPosition = (width, height) => ({
  x: Math.random() * width,
  y: -Math.random() * height,
});

// Component chữ chính

const LetterAnimation = ({ letters, targetPositions, delay = 0, onComplete }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Vị trí ban đầu ngẫu nhiên
    const initialPos = letters.map(() => getRandomPosition(width, height));
    setPositions(initialPos);

    const timer = setTimeout(() => {
      // Chuyển về vị trí target
      setPositions(targetPositions);

      if (onComplete) {
        setTimeout(onComplete, 4000); // tan rã sau 4s
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [letters, targetPositions, delay, onComplete]);

  return (
    <>
      {letters.map((letter, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "white",
            userSelect: "none",
          }}
          initial={{
            x: positions[i]?.x || 0,
            y: positions[i]?.y || 0,
            opacity: 0,
          }}
          animate={{
            x: positions[i]?.x || 0,
            y: positions[i]?.y || 0,
            opacity: 1,
          }}
          transition={{ duration: 1.5 }}
        >
          {letter}
        </motion.div>
      ))}
    </>
  );
};



// Nền mưa chữ

const BackgroundLetters = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const arr = Array.from({ length: 300 }).map(() => ({
      letter: backgroundLetters[Math.floor(Math.random() * backgroundLetters.length)],
      x: Math.random() * width,
      y: -Math.random() * height,
      duration: 4 + Math.random() * 6,
      color: "#00ff00", // màu xanh lá cố định
      size: 6 + Math.random() * 20,
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
            color: item.color,
            // fontWeight: "bold",
            userSelect: "none",
          }}
          initial={{ y: item.y, opacity: 0.3 }}
          animate={{ y: window.innerHeight + 50 }}
          transition={{ duration: item.duration, repeat: Infinity, repeatType: "loop" }}
        >
          {item.letter}
        </motion.div>
      ))}
    </>
  );
};



const FallingLetters = () => {
  const [showBirthday, setShowBirthday] = useState(false);
  const [showName, setShowName] = useState(false);

  const width = window.innerWidth;
  const height = window.innerHeight;

  // Khoảng cách chữ cái
  const letterSpacing = 40;

  // Vị trí cho từng cụm chữ
  const initialPositions = initialLetters.map((_, i) => ({
    x: width / 2 - (initialLetters.length * letterSpacing) / 2 + i * letterSpacing,
    y: height / 4, // dòng trên cùng
  }));

  const birthdayPositions = birthdayText.map((_, i) => ({
    x: width / 2 - (birthdayText.length * letterSpacing) / 2 + i * letterSpacing,
    y: height / 3,
  }));

  const namePositions = nameText.map((_, i) => ({
    x: width / 2 - (nameText.length * letterSpacing) / 2 + i * letterSpacing,
    y: height / 2,
  }));

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Nền mưa chữ */}
      <BackgroundLetters />

      {/* Animation chữ chính */}
      {!showBirthday && (
        <LetterAnimation
          letters={initialLetters}
          targetPositions={initialPositions}   // <-- dùng vị trí riêng
          delay={3000}
          onComplete={() => setShowBirthday(true)}
        />
      )}

      {showBirthday && !showName && (
        <LetterAnimation
          letters={birthdayText}
          targetPositions={birthdayPositions}  // <-- dùng vị trí riêng
          delay={0}
          onComplete={() => setShowName(true)}
        />
      )}

      {showName && (
        <LetterAnimation
          letters={nameText}
          targetPositions={namePositions}      // <-- dùng vị trí riêng
          delay={0}
        />
      )}
    </div>
  );
};


export default FallingLetters;
