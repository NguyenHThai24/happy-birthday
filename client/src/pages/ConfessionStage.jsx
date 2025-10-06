import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgTulip from "../assets/thai-tulip.png";

const ConfessionStage = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);

  // Google Form URL - thay bằng URL form thực tế của bạn
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/1KJ9rcWIAaohT8GsFGQAxajFORw4Hsy4jqqSQvJgalTU/edit";

  // Memoize confession steps to prevent unnecessary re-renders
  const confessionSteps = useMemo(
    () => [
      { text: "...", duration: 4000 },
      { text: "Em muốn nói với chị...", duration: 3500 },
      { text: "Từ lần đầu tiên gặp chị", duration: 4000 },
      { text: "Em đã cảm thấy điều gì đó khác biệt", duration: 4000 },
      { text: "Có lẽ đó là định mệnh", duration: 3500 },
      { text: "Em còn nhớ ngày 27/08", duration: 3500 },
      { text: "Là ngày đầu tiên chúng ta nói chuyện", duration: 4000 },
      { text: "Em vẫn nhớ cảm giác đó", duration: 4000 },
      { text: "Từng chơi cầu lông, rồi cùng nhau nói chuyện", duration: 3500 },
      { text: "Đều khiến em hạnh phúc", duration: 3500 },
      { text: "27/08 - một ngày thật đặc biệt", duration: 4000 },
      { text: "Khi cuộc đời em bắt đầu thay đổi", duration: 4000 },
      { text: "Nhờ có chị bước vào", duration: 3500 },
      {
        text: "Chị đã giúp em nhận ra nhiều điều trong cuộc sống",
        duration: 4000,
      },
      {
        text: "Dạy em cách suy nghĩ chín chắn và trưởng thành hơn",
        duration: 4000,
      },
      {
        text: "Có những lúc em còn trẻ con, nói những lời không phải",
        duration: 4000,
      },
      { text: "Nhưng chính những lần vấp ngã ấy", duration: 3500 },
      {
        text: "Lại giúp em nhận ra giá trị của sự trưởng thành",
        duration: 4000,
      },
      {
        text: "Em đã dành thời gian suy ngẫm về những sai sót",
        duration: 4000,
      },
      { text: "Để hoàn thiện bản thân mỗi ngày", duration: 3500 },
      { text: "Để xứng đáng hơn với tình cảm của chị", duration: 4000 },
      { text: "Mỗi lần nhìn thấy chị", duration: 3500 },
      { text: "Tim em lại đập nhanh hơn", duration: 4000 },
      { text: "Giọng nói của chị", duration: 3500 },
      { text: "Luôn ngập tràn sự hồn nhiên, tươi vui", duration: 4000 },
      {
        text: "Như một làn gió xua tan mọi muộn phiền",
        duration: 4000,
      },
      { text: "Chị biết không...", duration: 3500 },
      { text: "Kể từ ngày 27/08 ấy", duration: 3500 },
      { text: "Mọi thứ với em đều trở nên ý nghĩa", duration: 4000 },
      { text: "Em thích cách chị cười", duration: 3500 },
      { text: "Thích cách chị nói chuyện", duration: 3500 },
      { text: "Thích tất cả những gì về chị", duration: 4000 },
      { text: "Mỗi ngày trôi qua", duration: 3500 },
      { text: "Kể từ ngày đầu tiên 27/08", duration: 3500 },
      { text: "Em lại càng thêm yêu quý chị", duration: 4000 },
      { text: "Cảm giác này...", duration: 3500 },
      { text: "Thật khó để diễn tả bằng lời", duration: 4000 },
      { text: "Nhưng em biết chắc một điều", duration: 3500 },
      { text: "Chị là người đặc biệt nhất", duration: 4000 },
      { text: "Trong cuộc đời em", duration: 4000 },
      { text: "Em muốn được ở bên chị", duration: 3500 },
      { text: "Chia sẻ niềm vui", duration: 3500 },
      { text: "Cùng vượt qua khó khăn", duration: 4000 },
      { text: "Em muốn được chăm sóc chị", duration: 3500 },
      { text: "Bảo vệ chị", duration: 3500 },
      { text: "Và luôn làm chị hạnh phúc", duration: 4000 },
      { text: "Em hứa sẽ cố gắng", duration: 3500 },
      { text: "Để trở thành người tốt hơn", duration: 4000 },
      { text: "Xứng đáng với chị", duration: 4000 },
      { text: "Em biết mình còn nhiều thiếu sót", duration: 3500 },
      { text: "Nhưng em sẽ học hỏi", duration: 3500 },
      { text: "Và trưởng thành mỗi ngày", duration: 4000 },
      { text: "Để có thể đồng hành cùng chị", duration: 4000 },
      { text: "Trên con đường phía trước", duration: 4000 },
      { text: "Em không biết tương lai sẽ ra sao", duration: 3500 },
      { text: "Nhưng em biết rằng...", duration: 3500 },
      { text: "Kể từ 27/08 định mệnh ấy", duration: 3500 },
      { text: "Em muốn chị ở trong đó", duration: 4000 },
      { text: "Chị có cho em một cơ hội...", duration: 4500 },
      {
        text: "Để em được tìm hiểu chị nhiều hơn?",
        duration: 5000,
        isQuestion: true,
      },
    ],
    []
  );

  // Optimized background elements with pre-calculated values
  const backgroundHearts = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        fontSize: 20 + Math.random() * 30,
        duration: 45 + Math.random() * 30,
        delay: Math.random() * 12,
      })),
    []
  );

  const backgroundBubbles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 40 + Math.random() * 80,
        duration: 25 + Math.random() * 20,
        delay: Math.random() * 8,
      })),
    []
  );

  const cardHearts = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.cos((i * Math.PI * 2) / 8) * 250,
        top: Math.sin((i * Math.PI * 2) / 8) * 200,
        duration: 8 + i * 0.8,
      })),
    []
  );

  const innerHearts = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: i * 1.2,
      })),
    []
  );

  // Memoized progress calculation
  const totalSteps = confessionSteps.length;
  const progressPercent = useMemo(
    () => ((stage + 1) / totalSteps) * 100,
    [stage, totalSteps]
  );

  // Optimized useEffect with cleanup
  useEffect(() => {
    if (stage < confessionSteps.length) {
      const currentStep = confessionSteps[stage];
      let progressInterval;

      const timer = setTimeout(() => {
        setStage(stage + 1);
      }, currentStep.duration);

      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / (currentStep.duration / 100);
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, currentStep.duration / 100);

      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, [stage, confessionSteps]);

  // Simple response handler - mở Google Form
  const handleResponse = useCallback(
    (answer) => {
      // Mở Google Form trong tab mới
      window.open(GOOGLE_FORM_URL, "_blank");

      // Chuyển đến trang kết quả ngay lập tức
      const nextStage =
        answer === "yes"
          ? confessionSteps.length + 1
          : confessionSteps.length + 2;
      setStage(nextStage);

      setTimeout(() => {
        onComplete?.(answer === "yes" ? "accepted" : "declined");
      }, 5000);
    },
    [confessionSteps.length, onComplete, GOOGLE_FORM_URL]
  );

  // Heart explosion elements
  const heartExplosionElements = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600,
        rotate: Math.random() * 360,
        type: ["💕", "💖", "💗", "💝", "✨"][Math.floor(Math.random() * 5)],
      })),
    []
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 overflow-hidden">
      {/* Optimized Floating hearts background - Slower and smoother */}
      <div className="absolute inset-0">
        {backgroundHearts.map((heart) => (
          <motion.div
            key={`heart-${heart.id}`}
            className="absolute text-pink-400/30 pointer-events-none"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: `${heart.fontSize}px`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "easeInOut",
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Optimized Floating bubbles - Slower and smoother */}
      <div className="absolute inset-0">
        {backgroundBubbles.map((bubble) => (
          <motion.div
            key={`bubble-${bubble.id}`}
            className="absolute rounded-full bg-gradient-to-br from-pink-300/20 to-rose-300/20 backdrop-blur-sm pointer-events-none"
            style={{
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Main confession cards */}
        {stage < confessionSteps.length && (
          <motion.div
            key={`stage-${stage}`}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Progress indicator */}
            <div className="fixed top-0 left-0 right-0 z-50">
              <div className="h-1 bg-pink-200">
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="text-center py-2 text-pink-600 text-sm font-medium bg-white/50 backdrop-blur-sm">
                {stage + 1} / {totalSteps}
              </div>
            </div>

            {/* Optimized Animated hearts around card */}
            {cardHearts.map((heart) => (
              <motion.div
                key={`card-heart-${heart.id}`}
                className="absolute text-4xl z-0 pointer-events-none"
                style={{
                  left: `calc(50% + ${heart.left}px)`,
                  top: `calc(50% + ${heart.top}px)`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: heart.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {["💖", "💝", "💗", "💕"][heart.id % 4]}
              </motion.div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 z-0 opacity-30">
              <img
                src={imgTulip}
                alt="Hoa tulip"
                className="w-[50%] h-[50%] mx-auto object-cover"
              />
            </div>
            {/* Main card */}
            <motion.div
              className="max-w-4xl w-full relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-pink-200 shadow-2xl overflow-hidden">
                {/* Pink gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-100/30 to-transparent" />

                {/* Optimized Floating small hearts inside card */}
                <div className="absolute inset-0 overflow-hidden">
                  {innerHearts.map((heart) => (
                    <motion.div
                      key={`inner-heart-${heart.id}`}
                      className="absolute text-pink-300/25 text-2xl pointer-events-none"
                      style={{
                        left: `${heart.left}%`,
                        top: `${heart.top}%`,
                      }}
                      animate={{
                        y: [0, -25, 0],
                        opacity: [0.15, 0.4, 0.15],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: heart.delay,
                      }}
                    >
                      💕
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-16 min-h-[400px] flex items-center justify-center">
                  <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl font-light text-transparent bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-center leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {confessionSteps[stage].text}
                  </motion.h1>
                </div>

                {/* Bottom progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-pink-100">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-400 to-rose-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Hint text */}
              {!confessionSteps[stage].isQuestion && (
                <motion.p
                  className="text-pink-600 text-center mt-6 text-sm flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="animate-pulse">💗</span>
                  Đang đọc...
                  <span className="animate-pulse">💗</span>
                </motion.p>
              )}
            </motion.div>

            {/* Skip button */}
            <motion.button
              className="fixed bottom-8 right-8 text-pink-500 hover:text-pink-700 text-sm font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transition-colors z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              onClick={() => setStage(confessionSteps.length)}
            >
              Bỏ qua →
            </motion.button>
          </motion.div>
        )}

        {/* Response buttons */}
        {stage === confessionSteps.length && (
          <ResponseButtons
            handleResponse={handleResponse}
            confessionSteps={confessionSteps}
          />
        )}

        {/* Accepted response */}
        {stage === confessionSteps.length + 1 && (
          <AcceptedResponse heartExplosionElements={heartExplosionElements} />
        )}

        {/* Declined response */}
        {stage === confessionSteps.length + 2 && <DeclinedResponse />}
      </AnimatePresence>
    </div>
  );
};

// Extracted components for better performance
const ResponseButtons = ({ handleResponse, confessionSteps }) => {
  const questionHearts = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: 20 + i * 7,
        top: 30 + (i % 3) * 20,
        duration: 12 + i * 0.8,
      })),
    []
  );

  return (
    <motion.div
      key="buttons"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating hearts animation */}
      {questionHearts.map((heart) => (
        <motion.div
          key={`question-heart-${heart.id}`}
          className="absolute text-3xl pointer-events-none"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {["💕", "💖", "💗", "💝"][heart.id % 4]}
        </motion.div>
      ))}

      {/* Question card */}
      <motion.div
        className="max-w-3xl w-full mb-12 relative z-10"
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-pink-200 p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-6">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="text-6xl mb-4"
            >
              💝
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-center leading-relaxed mb-4">
            {confessionSteps[confessionSteps.length - 2].text}
          </h2>
          <p className="text-2xl md:text-3xl text-pink-600 text-center">
            {confessionSteps[confessionSteps.length - 1].text}
          </p>
        </div>
      </motion.div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-4 relative z-10">
        <motion.button
          className="flex-1 py-4 px-8 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white rounded-2xl text-lg font-medium shadow-xl transition-all"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleResponse("yes")}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Trả lời 💖
        </motion.button>

        {/* <motion.button
          className="flex-1 py-4 px-8 bg-white hover:bg-pink-50 text-pink-600 rounded-2xl text-lg font-medium border-2 border-pink-200 shadow-lg transition-all"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleResponse("no")}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Để chị nghĩ 💭
        </motion.button> */}
      </div>
    </motion.div>
  );
};

const AcceptedResponse = ({ heartExplosionElements }) => (
  <motion.div
    key="accepted"
    className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Heart explosion */}
    {heartExplosionElements.map((heart) => (
      <motion.div
        key={heart.id}
        className="absolute text-2xl pointer-events-none"
        style={{ left: "50%", top: "50%" }}
        initial={{ scale: 0, x: 0, y: 0 }}
        animate={{
          scale: [0, 1, 0.8],
          x: heart.x,
          y: heart.y,
          rotate: heart.rotate,
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        {heart.type}
      </motion.div>
    ))}

    <motion.div
      className="bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-pink-200 p-10 md:p-16 shadow-2xl max-w-2xl text-center relative z-10"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      <motion.div
        className="text-7xl mb-6"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5 }}
      >
        🎊
      </motion.div>
      <h2 className="text-3xl md:text-4xl font-light text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text mb-4">
        Cảm ơn chị rất nhiều!
      </h2>
      <p className="text-lg text-pink-700">
        Em sẽ cố gắng hết mình để chị luôn hạnh phúc bên em
      </p>
    </motion.div>
  </motion.div>
);

const DeclinedResponse = () => (
  <motion.div
    key="declined"
    className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-pink-200 p-10 md:p-16 shadow-2xl max-w-2xl text-center relative z-10"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      <motion.div
        className="text-7xl mb-6"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🌸
      </motion.div>
      <h2 className="text-3xl md:text-4xl font-light text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text mb-4">
        Em hiểu rồi
      </h2>
      <p className="text-lg text-pink-700 mb-3">
        Em sẽ đợi và tôn trọng quyết định của chị
      </p>
      <p className="text-lg text-pink-700">
        Dù thế nào, em vẫn luôn chúc chị hạnh phúc nhất
      </p>
    </motion.div>
  </motion.div>
);

export default ConfessionStage;
