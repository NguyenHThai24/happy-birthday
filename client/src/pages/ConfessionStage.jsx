import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ConfessionStage = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  const confessionSteps = [
    {
      text: "Có điều gì đó...",
      duration: 3000,
      emoji: "💭",
    },
    {
      text: "Em muốn nói với chị...",
      duration: 3000,
      emoji: "💌",
    },
    {
      text: "Từ lần đầu gặp chị",
      duration: 3500,
      emoji: "✨",
    },
    {
      text: "Em đã cảm thấy",
      duration: 3000,
      emoji: "💓",
    },
    {
      text: "Trái tim mình rung động",
      duration: 3500,
      emoji: "💗",
    },
    {
      text: "Chị luôn là người",
      duration: 3000,
      emoji: "🌟",
    },
    {
      text: "Khiến em cười mỗi ngày",
      duration: 3500,
      emoji: "😊",
    },
    {
      text: "Là ánh sáng trong đời em",
      duration: 3500,
      emoji: "☀️",
    },
    {
      text: "Em muốn được",
      duration: 3000,
      emoji: "🙏",
    },
    {
      text: "Tìm hiểu chị nhiều hơn",
      duration: 3500,
      emoji: "💝",
    },
    {
      text: "Được ở bên chị",
      duration: 3000,
      emoji: "🤝",
    },
    {
      text: "Chia sẻ từng khoảnh khắc",
      duration: 3500,
      emoji: "📸",
    },
    {
      text: "Chị có cho em cơ hội...",
      duration: 4000,
      emoji: "🌹",
    },
    {
      text: "Được làm quen với chị không?",
      duration: 5000,
      emoji: "💖",
      isQuestion: true,
    },
  ];

  useEffect(() => {
    if (stage < confessionSteps.length) {
      const timer = setTimeout(() => {
        setStage(stage + 1);
      }, confessionSteps[stage].duration);
      return () => clearTimeout(timer);
    } else if (stage === confessionSteps.length) {
      // Hiện nút chọn
      return;
    }
  }, [stage]);

  const handleResponse = async (answer) => {
    // Gửi email qua EmailJS
    const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Lấy từ emailjs.com
    const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    const message =
      answer === "yes"
        ? "🎉 CHỊ ẤY ĐỒNG Ý! Chị Lâm Bửu Linh đã đồng ý cho em làm quen! 💖"
        : "💭 Chị ấy chọn 'Để em nghĩ'";

    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: "your-email@gmail.com", // Email của bạn
            subject: "🎂 Kết quả tỏ tình sinh nhật",
            message: message,
            time: new Date().toLocaleString("vi-VN"),
          },
        }),
      });
    } catch (error) {
      console.log("Không gửi được email:", error);
    }

    if (answer === "yes") {
      setStage(confessionSteps.length + 1);
      setTimeout(() => {
        if (onComplete) onComplete("accepted");
      }, 4000);
    } else {
      setStage(confessionSteps.length + 2);
      setTimeout(() => {
        if (onComplete) onComplete("declined");
      }, 4000);
    }
  };

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-300 to-purple-400 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {
              ["💕", "💖", "💗", "💝", "💘", "🌹", "✨", "💫"][
                Math.floor(Math.random() * 8)
              ]
            }
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Confession messages */}
        {stage < confessionSteps.length && (
          <motion.div
            key={stage}
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
          >
            {/* Emoji */}
            <motion.div
              className="text-8xl mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {confessionSteps[stage].emoji}
              </motion.span>
            </motion.div>

            {/* Text */}
            <motion.div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-relaxed">
                {confessionSteps[stage].text}
              </h2>
            </motion.div>

            {/* Loading dots for non-question stages */}
            {!confessionSteps[stage].isQuestion && (
              <motion.div
                className="flex gap-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-white/70 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Response buttons */}
        {stage === confessionSteps.length && (
          <motion.div
            key="buttons"
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Hearts floating */}
            <motion.div
              className="text-9xl mb-8"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💝
            </motion.div>

            {/* Question */}
            <motion.div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-2xl mb-12"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-relaxed mb-2">
                Chị có cho em cơ hội...
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-center text-pink-600">
                Được làm quen với chị không? 🌹
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="flex gap-6">
              <motion.button
                className="px-12 py-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full text-2xl font-bold shadow-2xl"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleResponse("yes")}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Được nhé 💖
              </motion.button>

              <motion.button
                className="px-12 py-6 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-full text-2xl font-bold shadow-2xl"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleResponse("no")}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Để em nghĩ 💭
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Accepted response */}
        {stage === confessionSteps.length + 1 && (
          <motion.div
            key="accepted"
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Confetti explosion */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0.5],
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 800,
                  rotate: Math.random() * 720,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
              >
                {
                  ["🎉", "💖", "✨", "🎊", "💝", "🌟"][
                    Math.floor(Math.random() * 6)
                  ]
                }
              </motion.div>
            ))}

            <motion.div
              className="text-9xl mb-8 z-10"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            >
              🎊
            </motion.div>

            <motion.div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl max-w-2xl z-10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-relaxed mb-4">
                Cảm ơn chị! 💖
              </h2>
              <p className="text-2xl text-center text-gray-700">
                Em sẽ cố gắng để chị luôn hạnh phúc
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Declined response */}
        {stage === confessionSteps.length + 2 && (
          <motion.div
            key="declined"
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div
              className="text-9xl mb-8"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🌸
            </motion.div>

            <motion.div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl max-w-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-relaxed mb-4">
                Em hiểu rồi 💭
              </h2>
              <p className="text-xl text-center text-gray-700">
                Dù thế nào, em vẫn luôn chúc chị hạnh phúc nhất
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConfessionStage;
