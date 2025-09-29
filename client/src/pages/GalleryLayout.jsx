import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.jpg";
import img13 from "../assets/images/13.jpg";
import img14 from "../assets/images/14.jpg";
import img15 from "../assets/images/15.jpg";
import img16 from "../assets/images/16.jpg";
import img17 from "../assets/images/17.jpg";
import img18 from "../assets/images/18.jpg";
import img19 from "../assets/images/19.jpg";
import img20 from "../assets/images/20.jpg";
import img21 from "../assets/images/21.jpg";
import img22 from "../assets/images/22.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
];

const reversedImages = [...images].reverse();

const messages = {
  0: "Chúc chị luôn rạng rỡ như ánh mặt trời 🌟",
  1: "Mỗi ngày đều tràn đầy niềm vui và hạnh phúc 💖",
  2: "Chúc chị luôn mạnh khỏe và tràn đầy năng lượng 💪",
  3: "Mọi ước mơ của chị đều sẽ thành hiện thực ✨",
  4: "Chúc chị thành công rực rỡ trong mọi lĩnh vực 🎯",
  5: "Tình yêu và hạnh phúc mãi mãi bên chị 💕",
  6: "Chúc chị luôn xinh đẹp và tự tin 👑",
  7: "Mỗi bước đi đều gặp may mắn 🍀",
  8: "Chúc chị một năm tuổi mới tuyệt vời 🎂",
  9: "Luôn được bao quanh bởi yêu thương 💝",
  10: "Chúc chị luôn vui vẻ như hôm nay 😊",
  11: "Mọi điều tốt đẹp nhất dành cho chị 🌸",
  12: "Chúc chị ngày càng trẻ đẹp hơn 🌺",
  13: "Thành công sẽ luôn đồng hành cùng chị 🏆",
  14: "Chúc chị một cuộc sống tràn đầy màu sắc 🌈",
  15: "Niềm vui và tiếng cười luôn ở bên chị 😄",
  16: "Chúc chị luôn giữ được nụ cười rạng rỡ 😍",
  17: "Mọi ngày đều là ngày đẹp trời 🌤️",
  18: "Chúc chị sức khỏe dồi dào 💚",
  19: "Luôn tỏa sáng như một ngôi sao ⭐",
  20: "Chúc chị sinh nhật thật ý nghĩa 🎉",
  21: "Yêu chị nhiều lắm! 💗",
};

const GalleryLayout = ({ onConfession }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [overlayStep, setOverlayStep] = useState(0);

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    if (overlayStep === 1) {
      setOverlayStep(2);
    } else if (overlayStep === 2) {
      setOverlayStep(0);
      setSelectedImage(null);
    }
  };

  return (
    <div className="w-screen h-screen relative">
      {/* Background với overlay gradient */}
      <div className="fixed inset-0 z-0">
        <img
          src={img21}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-green-400/20" />
      </div>

      {/* Header */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-green-400/90 backdrop-blur-md shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
            🎂 Kỷ Niệm Đáng Nhớ 💝
          </h1>
          <p className="text-white/90 text-center mt-2 text-sm md:text-base">
            Nhấn vào ảnh để xem lời chúc đặc biệt ✨
          </p>
        </div>
      </motion.div>

      {/* Grid ảnh */}
      <div className="absolute inset-0 z-10 overflow-y-auto pt-32 pb-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {reversedImages.map((img, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                {/* Image container */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer aspect-square bg-white/10 backdrop-blur-sm border-2 border-white/30"
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedImage({ src: img, index: i });
                    setOverlayStep(1);
                  }}
                >
                  <img
                    src={img}
                    alt={`memory-${i}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white text-sm font-medium">
                        Xem lời chúc 💌
                      </p>
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-3 right-3 bg-pink-500/90 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                    {reversedImages.length - i}
                  </div>
                </motion.div>

                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute -top-1 -right-1 text-2xl opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ✨
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img16})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            </motion.div>

            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 z-[60] bg-white/20 hover:bg-white/30 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setOverlayStep(0);
                setSelectedImage(null);
              }}
            >
              ✕
            </motion.button>

            {/* Instruction */}
            {overlayStep === 1 && (
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[60] bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Nhấn vào ảnh để xem lời chúc 💝
              </motion.div>
            )}

            {/* Card container */}
            <motion.div
              className="relative w-full max-w-2xl aspect-[3/4] cursor-pointer z-[55]"
              style={{ perspective: "1000px" }}
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Card flip */}
              <motion.div
                className="relative w-full h-full"
                animate={{
                  rotateY: overlayStep === 2 ? 180 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front side - Image */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={selectedImage.src}
                    alt="enlarged"
                    className="w-full h-full object-contain bg-gradient-to-br from-pink-100 to-purple-100"
                  />
                  {/* Image frame */}
                  <div className="absolute inset-0 border-8 border-white/30 rounded-3xl pointer-events-none" />
                </div>

                {/* Back side - Message */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-green-300 p-8 flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-white text-4xl"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.6, 0.3],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      >
                        {
                          ["💖", "✨", "🌸", "💝", "🎂"][
                            Math.floor(Math.random() * 5)
                          ]
                        }
                      </motion.div>
                    ))}
                  </div>

                  {/* Message content */}
                  <motion.div
                    className="relative z-10 text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-4 border-white">
                      <motion.div
                        className="text-6xl mb-6"
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
                        💝
                      </motion.div>
                      <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-green-600 bg-clip-text text-transparent leading-relaxed">
                        {messages[selectedImage.index] ||
                          "Chúc chị luôn hạnh phúc 💕"}
                      </p>
                    </div>
                  </motion.div>

                  {/* Tap instruction */}
                  <motion.p
                    className="absolute bottom-8 text-white/90 text-sm font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Nhấn lần nữa để đóng
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {onConfession && (
        <motion.button
          className="fixed bottom-6 right-6 z-50 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-full shadow-lg text-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onClick={onConfession}
        >
          💌 Xem lời tỏ tình
        </motion.button>
      )}
    </div>
  );
};

export default GalleryLayout;
