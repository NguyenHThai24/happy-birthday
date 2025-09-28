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
      letter:
        backgroundLetters[Math.floor(Math.random() * backgroundLetters.length)],
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
            color: "limegreen",
            fontWeight: "bold",
            userSelect: "none",
            opacity: 0.4,
          }}
          initial={{ y: item.y }}
          animate={{ y: window.innerHeight + 50 }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: "loop",
          }}
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

  return (<AnimatePresence>
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
    )} </AnimatePresence>
  );
};

// ================== Firework ==================
const NAME = "NGUYỄN HOÀNG THÁI CHÚC CHỊ SINH NHẬT VUI VẺ";

const Firework = ({ onComplete }) => {
  const [explosions, setExplosions] = useState([]);

  useEffect(() => {
    // nổ một lần khi mount
    spawnExplosion();

    // gọi onComplete sau khi nổ xong (3s)
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const spawnExplosion = () => {
    const particleCount = 111;
    const particles = Array.from({ length: particleCount }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const power = 250 + Math.random() * 250;
      const char = backgroundLetters[Math.floor(Math.random() * backgroundLetters.length)];
      return {
        x: Math.cos(angle) * power,
        y: Math.sin(angle) * power,
        char,
        color: "red",
      };
    });

    const newExplosion = { id: Date.now(), particles };
    setExplosions([newExplosion]); // chỉ giữ explosion này thôi

    // tự xóa sau 5 giây
    setTimeout(() => {
      setExplosions([]);
    }, 5000);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {explosions.map((exp) =>
        exp.particles.map((p, i) => (
          <motion.div
            key={exp.id + "-" + i}
            style={{
              position: "absolute",
              fontSize: 16,
              color: p.color,
            }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: [0, p.x, p.x * 0.8],
              y: [0, p.y, p.y + 200],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeOut",
            }}
          >
            {p.char}
          </motion.div>
        ))
      )}
    </div>
  );
};


// ================== Heart Formation ==================
const HeartFormation = ({ text, onComplete }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const count = text.length;
    const coords = [];


    for (let i = 0; i < count; i++) {
      const t = Math.PI - (i / count) * 2 * Math.PI;
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

      coords.push({
        x: x * 15 + window.innerWidth / 28,
        y: -y * 15 + window.innerHeight / 36,
        char: text[i],
      });
    }

    setParticles(coords);

    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 7000);
    return () => clearTimeout(timer);


  }, [text, onComplete]);

  return (<div className="absolute inset-0 flex items-center justify-center overflow-hidden">
    {particles.map((p, i) => (
      <motion.div
        key={i}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: 0,
        }}
        animate={{
          x: p.x,
          y: p.y,
          opacity: 1,
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
        style={{
          position: "absolute",
          fontSize: 24,
          fontWeight: "bold",
          color: "red",
        }}
      >
        {p.char}
      </motion.div>
    ))} </div>
  );
};

// =============== Random vị trí ngoài màn hình ===========
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

// =============== WordAnimation =================
const WordAnimation = ({ letters, y, onComplete, stayTime = 3000 }) => {
  const width = window.innerWidth;
  const letterSpacing = 80;

  const targetPositions = letters.map((_, i) => ({
    x: width / 2 - (letters.length * letterSpacing) / 2 + i * letterSpacing,
    y,
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, stayTime + 2000);
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
              times: [0, 0.25, 0.75, 1],
              duration: 1.5 + stayTime / 1000 + 1.5,
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

  const centerY = window.innerHeight / 2;

  return (<div className="w-screen h-screen relative overflow-hidden bg-black"> <BackgroundLetters />


    {stage === "countdown" && (
      <Countdown onComplete={() => setStage("firework")} />
    )}

    {stage === "firework" && (
      <Firework onComplete={() => setStage("heart")} />
    )}

    {stage === "heart" && (
      <>
        <HeartFormation text={NAME} onComplete={() => setStage("lineText")} />

        {/* Chữ bên dưới trái tim */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: window.innerHeight / 2 + 300, // dưới trái tim một khoảng
            left: "40%",
            transform: "translateX(0%)",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",
            textShadow: "0px 0px 10px red",
            whiteSpace: "nowrap",

          }}
        >
          Chúc mừng sinh nhật vui vẻ ❤️
        </motion.div>
      </>
    )}


    {/* {stage === "lineText" && (
      <WordAnimation
        letters={"NGUYỄN HOÀNG THÁI CHÚC MỪNG SINH NHẬT".split("")}
        y={centerY}
        stayTime={5000}
        onComplete={() => setStage("birthday")}
      />
    )} */}


    {stage === "birthday" && (
      <WordAnimation
        letters={birthdayText}
        y={centerY}
        stayTime={7000}
        onComplete={() => setStage("name")}
      />
    )}

    {stage === "name" && (
      <WordAnimation letters={nameText} y={centerY} stayTime={4000} />
    )}
  </div>


  );
};

export default FallingLetters;
