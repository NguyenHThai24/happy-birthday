import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Countdown = ({ onComplete }) => {
  const steps = [{ text: "Chúc chị một ngày đặc biệt...", duration: 3000 }];

  const [stepIndex, setStepIndex] = useState(0);
  const [count, setCount] = useState(null);

  useEffect(() => {
    if (count === null && stepIndex < steps.length) {
      const timer = setTimeout(
        () => setStepIndex((prev) => prev + 1),
        steps[stepIndex].duration
      );
      return () => clearTimeout(timer);
    } else if (count === null && stepIndex === steps.length) {
      setCount(3);
    } else if (count !== null && count > 0) {
      const timer = setTimeout(() => setCount((c) => c - 1), 1500);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      if (onComplete) onComplete();
    }
  }, [stepIndex, count, steps, onComplete]);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-green-400 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <AnimatePresence mode="wait">
        {/* Intro steps */}
        {count === null && stepIndex < steps.length && (
          <motion.div
            key={steps[stepIndex].text}
            className="absolute inset-0 flex flex-col items-center justify-center px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                {steps[stepIndex].text}
              </h1>
              <motion.div
                className="flex justify-center gap-2"
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
            </motion.div>

            {/* Decorative hearts */}
            <motion.div
              className="absolute"
              animate={{
                y: [-20, 20],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ top: "20%", left: "15%" }}
            >
              <span className="text-6xl opacity-30">💖</span>
            </motion.div>
            <motion.div
              className="absolute"
              animate={{
                y: [20, -20],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ bottom: "20%", right: "15%" }}
            >
              <span className="text-6xl opacity-30">🎂</span>
            </motion.div>
          </motion.div>
        )}

        {/* Countdown numbers */}
        {count !== null && count > 0 && (
          <motion.div
            key={count}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              />

              {/* Number */}
              <motion.div
                className="relative text-white font-black drop-shadow-2xl"
                style={{
                  fontSize: "clamp(8rem, 25vw, 20rem)",
                  textShadow:
                    "0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.3)",
                }}
                animate={{
                  textShadow: [
                    "0 0 40px rgba(255,255,255,0.5)",
                    "0 0 80px rgba(255,255,255,0.8)",
                    "0 0 40px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                {count}
              </motion.div>

              {/* Ring effect */}
              <motion.div
                className="absolute inset-0 border-8 border-white/50 rounded-full"
                style={{
                  width: "150%",
                  height: "150%",
                  left: "-25%",
                  top: "-25%",
                }}
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Sparkles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 12) * 200,
                  y: Math.sin((i * Math.PI * 2) / 12) * 200,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Countdown;
