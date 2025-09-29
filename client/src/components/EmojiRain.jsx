import React, { useMemo } from "react";
import { motion } from "framer-motion";
import hbImage from "../assets/happy-birthday.png";

const EmojiHeart = () => {
  const total = 40; // số emoji tạo viền trái tim

  // Hàm parametric vẽ hình trái tim
  const getHeartPoints = (n) => {
    const points = [];
    for (let i = 0; i < n; i++) {
      const t = (Math.PI * 2 * i) / n;
      // Công thức parametric của hình trái tim
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

      points.push({ x: x * 12, y: -y * 12 }); // scale & lật Y
    }
    return points;
  };

  const emojis = useMemo(() => {
    const heartPoints = getHeartPoints(total);
    return heartPoints.map((p, i) => ({
      ...p,
      emoji: Math.random() > 0.5 ? "🎂" : "🎂",
      delay: i * 0.1, // delay để nó bay lần lượt
    }));
  }, [total]);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-pink-300 overflow-hidden">
      {/* Emoji bay ra tạo thành hình trái tim */}
      {emojis.map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
          animate={{ x: item.x, y: item.y, opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: item.delay,
            ease: "easeOut",
          }}
          className="absolute text-2xl"
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Ảnh Happy Birthday */}
      <img
        src={hbImage}
        alt="Happy Birthday"
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[300px] drop-shadow-lg"
      />
    </div>
  );
};

export default EmojiHeart;
