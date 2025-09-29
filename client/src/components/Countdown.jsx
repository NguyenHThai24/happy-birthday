import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Countdown = ({ onComplete }) => {
  const steps = [
    // { text: "Bạn đã sẵn sàng chưa?", duration: 2000 },
    { text: "Chúc chị một ngày đặc biệt...", duration: 3000 },
    // { text: "Giữ bình tĩnh nhé ❤️", duration: 2500 },
    // { text: "Chuẩn bị nhé...", duration: 2000 },
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const [count, setCount] = useState(null); // null = chưa bắt đầu countdown

  useEffect(() => {
    if (count === null && stepIndex < steps.length) {
      // đang ở intro step
      const timer = setTimeout(
        () => setStepIndex((prev) => prev + 1),
        steps[stepIndex].duration
      );
      return () => clearTimeout(timer);
    } else if (count === null && stepIndex === steps.length) {
      // xong intro -> bắt đầu countdown
      setCount(3);
    } else if (count !== null && count > 0) {
      const timer = setTimeout(() => setCount((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      if (onComplete) onComplete();
    }
  }, [stepIndex, count, steps, onComplete]);

  return (
    <AnimatePresence>
      {/* Hiện intro steps */}
      {count === null && stepIndex < steps.length && (
        <motion.div
          key={steps[stepIndex].text}
          className="absolute inset-0 flex items-center justify-center text-white font-bold"
          style={{
            fontSize: "3rem",
            textAlign: "center",
            padding: "1rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {steps[stepIndex].text}
        </motion.div>
      )}

      {/* Hiện countdown */}
      {count !== null && count > 0 && (
        <motion.div
          key={count}
          className="absolute inset-0 flex items-center justify-center text-white font-bold"
          style={{
            fontSize: "10rem",
          }}
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

export default Countdown;
