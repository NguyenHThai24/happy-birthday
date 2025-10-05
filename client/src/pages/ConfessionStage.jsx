import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import hình tulip - thay đổi đường dẫn theo project của bạn
import imgTulip from "../assets/thai-tulip.png";
// const imgTulip = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800"; // Placeholder

const ConfessionStage = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  const confessionSteps = [
    {
      text: "...",
      duration: 5000,
      emoji: "💭",
    },
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
      text: "Từ lần đầu tiên gặp chị",
      duration: 3500,
      emoji: "✨",
    },
    {
      text: "Em đã cảm thấy điều gì đó khác biệt",
      duration: 3500,
      emoji: "💓",
    },
    {
      text: "Có lẽ đó là định mệnh",
      duration: 3000,
      emoji: "🌟",
    },
    {
      text: "Nụ cười của chị",
      duration: 3000,
      emoji: "😊",
    },
    {
      text: "Như ánh nắng ấm áp",
      duration: 3500,
      emoji: "☀️",
    },
    {
      text: "Xua tan mọi buồn phiền trong em",
      duration: 3500,
      emoji: "🌈",
    },
    {
      text: "Mỗi lần nhìn thấy chị",
      duration: 3000,
      emoji: "👀",
    },
    {
      text: "Tim em lại đập nhanh hơn",
      duration: 3500,
      emoji: "💗",
    },
    {
      text: "Giọng nói của chị",
      duration: 3000,
      emoji: "🎵",
    },
    {
      text: "Như giai điệu du dương",
      duration: 3500,
      emoji: "🎶",
    },
    {
      text: "Luôn vang vọng trong tâm trí em",
      duration: 3500,
      emoji: "💭",
    },
    {
      text: "Chị biết không...",
      duration: 3000,
      emoji: "🤔",
    },
    {
      text: "Em thích cách chị cười",
      duration: 3000,
      emoji: "😄",
    },
    {
      text: "Thích cách chị nói chuyện",
      duration: 3000,
      emoji: "💬",
    },
    {
      text: "Thích tất cả những gì về chị",
      duration: 3500,
      emoji: "💝",
    },
    {
      text: "Mỗi ngày trôi qua",
      duration: 3000,
      emoji: "📅",
    },
    {
      text: "Em lại càng thêm yêu quý chị",
      duration: 3500,
      emoji: "💖",
    },
    {
      text: "Cảm giác này...",
      duration: 3000,
      emoji: "💭",
    },
    {
      text: "Thật khó để diễn tả bằng lời",
      duration: 3500,
      emoji: "✍️",
    },
    {
      text: "Nhưng em biết chắc một điều",
      duration: 3000,
      emoji: "💡",
    },
    {
      text: "Chị là người đặc biệt nhất",
      duration: 3500,
      emoji: "⭐",
    },
    {
      text: "Trong cuộc đời em",
      duration: 3500,
      emoji: "🌟",
    },
    {
      text: "Em muốn được ở bên chị",
      duration: 3000,
      emoji: "🤝",
    },
    {
      text: "Chia sẻ niềm vui",
      duration: 3000,
      emoji: "😊",
    },
    {
      text: "Cùng vượt qua khó khăn",
      duration: 3500,
      emoji: "💪",
    },
    {
      text: "Em muốn được chăm sóc chị",
      duration: 3000,
      emoji: "🫶",
    },
    {
      text: "Bảo vệ chị",
      duration: 3000,
      emoji: "🛡️",
    },
    {
      text: "Và luôn làm chị hạnh phúc",
      duration: 3500,
      emoji: "😊",
    },
    {
      text: "Em hứa sẽ cố gắng",
      duration: 3000,
      emoji: "🙏",
    },
    {
      text: "Để trở thành người tốt hơn",
      duration: 3500,
      emoji: "🌱",
    },
    {
      text: "Xứng đáng với chị",
      duration: 3500,
      emoji: "💎",
    },
    {
      text: "Em biết mình còn nhiều thiếu sót",
      duration: 3000,
      emoji: "😔",
    },
    {
      text: "Nhưng em sẽ học hỏi",
      duration: 3000,
      emoji: "📚",
    },
    {
      text: "Và trưởng thành mỗi ngày",
      duration: 3500,
      emoji: "🌿",
    },
    {
      text: "Để có thể đồng hành cùng chị",
      duration: 3500,
      emoji: "👫",
    },
    {
      text: "Trên con đường phía trước",
      duration: 3500,
      emoji: "🛤️",
    },
    {
      text: "Em không biết tương lai sẽ ra sao",
      duration: 3000,
      emoji: "🔮",
    },
    {
      text: "Nhưng em biết rằng...",
      duration: 3000,
      emoji: "💭",
    },
    {
      text: "Em muốn chị ở trong đó",
      duration: 3500,
      emoji: "💕",
    },
    {
      text: "Chị có cho em một cơ hội...",
      duration: 4000,
      emoji: "🌹",
    },
    {
      text: "Để em được tìm hiểu chị nhiều hơn?",
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
    }
  }, [stage]);

  const handleResponse = (answer) => {
    const zaloPhone = "0333929901";

    if (answer === "yes") {
      const message = encodeURIComponent("Chào em! Chị đồng ý cho em được tìm hiểu chị nhiều hơn nhé 💖✨");
      window.open(`https://zalo.me/${zaloPhone}?text=${message}`, '_blank');

      setStage(confessionSteps.length + 1);
      setTimeout(() => {
        if (onComplete) onComplete("accepted");
      }, 5000);
    } else {
      const message = encodeURIComponent("Chào em! Chị cần thêm thời gian để suy nghĩ nhé 💭");
      window.open(`https://zalo.me/${zaloPhone}?text=${message}`, '_blank');

      setStage(confessionSteps.length + 2);
      setTimeout(() => {
        if (onComplete) onComplete("declined");
      }, 5000);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-400 via-pink-300 to-purple-400 overflow-hidden">
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
      <div className="absolute bottom-0 left-0 right-0 z-0 opacity-30">
        <img
          src={imgTulip}
          alt="Hoa tulip"
          className="w-[50%] h-[50%] mx-auto object-cover"

        />
      </div>
      <AnimatePresence mode="wait">
        {/* Confession messages */}
        {stage < confessionSteps.length && (
          <motion.div
            key={stage}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
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

            {/* Text in Heart Shape */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {/* Heart Shape Container */}
              <div className="relative w-[320px] h-[280px] md:w-[400px] md:h-[350px]">
                {/* Heart SVG Background */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#ec4899", stopOpacity: 0.95 }} />
                      <stop offset="50%" style={{ stopColor: "#f43f5e", stopOpacity: 0.95 }} />
                      <stop offset="100%" style={{ stopColor: "#9333ea", stopOpacity: 0.95 }} />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <motion.path
                    d="M100,170 C20,120 10,80 10,55 C10,30 30,10 55,10 C75,10 90,20 100,35 C110,20 125,10 145,10 C170,10 190,30 190,55 C190,80 180,120 100,170 Z"
                    fill="url(#heartGradient)"
                    filter="url(#glow)"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />
                </svg>

                {/* Floating hearts around */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{
                      left: `${15 + Math.cos((i * Math.PI * 2) / 6) * 150}px`,
                      top: `${50 + Math.sin((i * Math.PI * 2) / 6) * 120}px`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.7, 0.3],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    💕
                  </motion.div>
                ))}

                {/* Text Content */}
                <div className="absolute inset-0 flex items-center justify-center px-8 py-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-center text-white drop-shadow-lg leading-relaxed">
                    {confessionSteps[stage].text}
                  </h2>
                </div>

                {/* Sparkles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    className="absolute text-xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    ✨
                  </motion.div>
                ))}
              </div>

              {/* Pulsing heart effect */}
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "blur(20px)",
                  background: "radial-gradient(circle, rgba(236,72,153,0.6) 0%, transparent 70%)",
                }}
              />
            </motion.div>

            {/* Loading dots for non-question stages */}
            {!confessionSteps[stage].isQuestion && (
              <motion.div
                className="flex gap-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
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
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6"
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
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-relaxed mb-2">
                Chị có cho em một cơ hội...
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-center text-pink-600">
                Để em được tìm hiểu chị nhiều hơn? 🌹
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="flex gap-6 flex-wrap justify-center">
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
                Để chị nghĩ 💭
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Accepted response */}
        {stage === confessionSteps.length + 1 && (
          <motion.div
            key="accepted"
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6"
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
              <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-relaxed mb-4">
                Cảm ơn chị rất nhiều! 💖
              </h2>
              <p className="text-xl text-center text-gray-700 mb-2">
                Em sẽ cố gắng hết mình
              </p>
              <p className="text-xl text-center text-gray-700">
                Để chị luôn hạnh phúc bên em
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Declined response */}
        {stage === confessionSteps.length + 2 && (
          <motion.div
            key="declined"
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6"
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
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-relaxed mb-4">
                Em hiểu rồi 💭
              </h2>
              <p className="text-lg text-center text-gray-700 mb-2">
                Em sẽ đợi và tôn trọng quyết định của chị
              </p>
              <p className="text-lg text-center text-gray-700">
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