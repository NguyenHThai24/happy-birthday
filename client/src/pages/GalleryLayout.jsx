import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img72 from "../assets/images/72.jpg";
// Import ảnh background và backdrop
const bgImage = img72;

// Load tất cả ảnh từ thư mục assets/images
const images = import.meta.glob("../assets/images/*.jpg", { eager: true });
const imageList = Object.values(images).map((module) => module.default);

const messages = {
  0: "Chúc chị luôn rạng rỡ như ánh mặt trời trong lòng anh 🌟",
  1: "Mỗi ngày được thấy chị cười là hạnh phúc của anh 💖",
  2: "Anh chúc chị luôn khỏe để anh được ở bên chị lâu hơn 💪",
  3: "Ước mơ của anh là được thấy chị hạnh phúc mỗi ngày ✨",
  4: "Thành công của chị là niềm tự hào trong lòng anh 🎯",
  5: "Anh muốn là người mang tình yêu đến bên chị 💕",
  6: "Trong mắt anh, chị luôn là người đẹp nhất 👑",
  7: "Anh muốn là người may mắn được đi bên chị 🍀",
  8: "Tuổi mới của chị, anh xin được ở bên chị nhiều hơn 🎂",
  9: "Anh muốn là người luôn yêu thương chị nhất 💝",
  10: "Nụ cười của chị làm tim anh rộn ràng 😊",
  11: "Điều tốt đẹp nhất anh muốn dành cho chị là tình cảm của anh 🌸",
  12: "Với anh, chị mãi mãi trẻ trung và xinh đẹp 🌺",
  13: "Anh muốn là người đồng hành cùng chị mọi nẻo đường 🏆",
  14: "Chị là màu sắc rực rỡ nhất trong cuộc đời anh 🌈",
  15: "Tiếng cười của chị là giai điệu anh muốn nghe mỗi ngày 😄",
  16: "Nụ cười chị là điều anh luôn muốn được chiêm ngưỡng 😍",
  17: "Mỗi ngày có chị đều là ngày đẹp trời với anh 🌤️",
  18: "Anh nguyện chăm sóc sức khỏe của chị suốt đời 💚",
  19: "Chị là ngôi sao sáng nhất trong bầu trời của anh ⭐",
  20: "Sinh nhật chị cũng là ngày đặc biệt với anh 🎉",
  21: "Yêu chị là điều anh không bao giờ thay đổi 💗",
  22: "Chị có biết anh nghĩ về chị mỗi ngày không? 🌙",
  23: "Anh muốn là lý do khiến chị mỉm cười 😊",
  24: "Trong tim anh, chị luôn là số một 🥇",
  25: "Anh chúc chị hạnh phúc, và anh muốn là nguồn hạnh phúc đó 💫",
  26: "Mỗi khoảnh khắc bên chị đều quý giá với anh 📸",
  27: "Anh muốn viết nên câu chuyện tình yêu cùng chị 📖",
  28: "Chị là món quà tuyệt vời nhất anh từng gặp 🎁",
  29: "Anh nguyện bảo vệ nụ cười của chị mãi mãi 🛡️",
  30: "Với anh, chị đặc biệt hơn bất cứ ai 💎",
  31: "Anh muốn là vai để chị tựa vào lúc mệt mỏi 🤗",
  32: "Trái tim anh chỉ đập mạnh khi nghĩ về chị 💓",
  33: "Anh mong một ngày được nắm tay chị đi khắp thế gian 🌍",
  34: "Chị là câu trả lời cho mọi câu hỏi trong lòng anh ❓",
  35: "Anh muốn là người làm chị ấm lòng những ngày lạnh 🔥",
  36: "Mỗi ngày thức dậy, anh đều mong được gặp chị ☀️",
  37: "Chị là giấc mơ đẹp nhất anh không muốn tỉnh dậy 💭",
  38: "Anh nguyện dành cả thanh xuân để yêu thương chị 🌱",
  39: "Với anh, chị không chỉ đẹp mà còn tuyệt vời 🌹",
  40: "Anh muốn là người hiểu chị nhất trên đời này 🤝",
  41: "Tim anh rung động mỗi lần nhìn thấy chị 💘",
  42: "Anh chúc chị luôn vui, và anh muốn là người mang lại niềm vui đó 🎪",
  43: "Trong mắt anh, chị tỏa sáng như kim cương 💍",
  44: "Anh muốn mỗi sinh nhật của chị đều có anh bên cạnh 🎂",
  45: "Chị là lời giải cho bài toán tình yêu của anh ➕",
  46: "Anh nguyện dành mọi điều tốt đẹp cho chị 🌟",
  47: "Nếu được chọn, anh muốn yêu chị đến hết đời 💞",
  48: "Chị có biết chị đặc biệt như thế nào với anh không? 🎀",
  49: "Anh muốn là người chạm đến trái tim chị 💗",
  50: "Mỗi kỷ niệm bên chị đều là báu vật của anh 🏆",
  51: "Anh nguyện che chở cho chị khỏi mọi bão giông 🌂",
  52: "Với anh, chị là định nghĩa của từ 'hoàn hảo' ✨",
  53: "Anh muốn là người làm cho trái tim chị ấm áp 🔥",
  54: "Chị là lý do khiến anh tin vào tình yêu 💑",
  55: "Anh chúc chị mọi điều tốt lành, vì chị xứng đáng 🍀",
  56: "Trong lòng anh, chị là duy nhất 1️⃣",
  57: "Anh muốn viết nên ngàn lời yêu cho riêng chị ✍️",
  58: "Chị làm cuộc đời anh thêm ý nghĩa biết bao 🌈",
  59: "Anh nguyện làm mọi thứ để thấy chị cười 😄",
  60: "Tình cảm của anh dành cho chị không bao giờ phai nhạt 🌺",
  61: "Chị là ánh sáng dẫn lối trong đêm tối của anh 🔦",
  62: "Anh muốn mỗi ngày của chị đều có anh hiện diện 📅",
  63: "Với anh, yêu chị là điều tự nhiên nhất 🌿",
  64: "Chị có biết anh trân trọng chị như thế nào không? 💝",
  65: "Anh nguyện biến mọi ước mơ của chị thành hiện thực 🪄",
  66: "Trong cuộc đời anh, chị là chương đẹp nhất 📚",
  67: "Anh muốn mỗi bước đi của chị đều có bóng dáng anh 👣",
  68: "Chị là bài hát yêu thích nhất trong playlist của anh 🎵",
  69: "Anh chúc chị luôn tỏa sáng như bây giờ 💫",
  70: "Tình yêu anh dành cho chị như biển cả mênh mông 🌊",
  71: "Chị là điểm đến cuối cùng trong hành trình tìm kiếm của anh 🎯",
  72: "Anh muốn là tay áo để lau nước mắt cho chị 🤧",
  73: "Với anh, mỗi ngày bên chị đều là kỷ niệm 📆",
  74: "Chị là món quà trời ban tặng cho anh 🎁",
  75: "Anh nguyện yêu thương chị bằng cả trái tim mình 💖",
  76: "Trong tương lai, anh muốn thấy chị bên cạnh 🔮",
  77: "Chị làm anh trở thành phiên bản tốt hơn mỗi ngày 📈",
  78: "Anh muốn mỗi giấc mơ của chị đều có anh góp mặt 🌙",
  79: "Tình cảm của anh dành cho chị chân thành nhất 🙏",
  80: "Chị là niềm vui lớn nhất trong đời anh 🎉",
  81: "Anh nguyện làm người hùng trong câu chuyện của chị 🦸",
  82: "Với anh, yêu chị là hạnh phúc lớn nhất 😊",
  83: "Chị có biết chị quan trọng với anh thế nào không? 🔑",
  84: "Anh muốn dành cả đời để chăm sóc chị 🏡",
  85: "Mỗi lần nhìn chị, tim anh lại rộn ràng 💓",
  86: "Chị là câu thơ đẹp nhất anh từng đọc 📝",
  87: "Anh chúc chị luôn tươi trẻ như hoa 🌷",
  88: "Trong tim anh, chị là nữ hoàng 👸",
  89: "Anh muốn là người chị nghĩ đến đầu tiên 🥇",
  90: "Chị làm mọi thứ trở nên tốt đẹp hơn 🌟",
  91: "Anh nguyện bên chị qua mọi thăng trầm 🎢",
  92: "Với anh, chị là định mệnh 🧭",
  93: "Anh muốn mỗi khoảnh khắc của chị đều hạnh phúc ⏰",
  94: "Chị là lý do khiến anh muốn trở nên tốt hơn 🌱",
  95: "Anh chúc chị luôn được yêu thương, đặc biệt từ anh 💕",
  96: "Trong đời anh, chị là duy nhất không ai thay thế 🔐",
  97: "Anh muốn là người cùng chị xây dựng tương lai 🏗️",
  98: "Chị có biết anh yêu chị thế nào không? ❤️",
  99: "Anh nguyện làm tất cả vì nụ cười của chị 😊",
  100: "Với anh, chị là ý nghĩa của cuộc sống 🌏",
  101: "Chị là giấc mơ anh muốn biến thành hiện thực 💭",
  102: "Anh muốn nắm tay chị đi hết cuộc đời này 🤝",
  103: "Mỗi ngày yêu chị, anh lại thêm hạnh phúc 📊",
  104: "Chị là ánh dương đầu tiên anh muốn thấy 🌅",
  105: "Anh chúc chị mọi điều ngọt ngào như tình cảm anh 🍬",
  106: "Trong trái tim anh, chị chiếm trọn không gian 💝",
  107: "Anh muốn mỗi sinh nhật sau này đều ở bên chị 🎂",
  108: "Chị là điều kỳ diệu nhất đến với anh ✨",
  109: "Anh nguyện yêu chị từng ngày một nhiều hơn 📈",
  110: "Với anh, chị là tất cả những gì anh cần 💯",
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
          src={bgImage}
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
            {imageList.map((img, i) => (
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

                  {/* Hover overlay với lời chúc */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/95 via-purple-500/95 to-green-400/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4">
                    <div className="text-center">
                      <motion.div
                        className="text-4xl mb-3"
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
                      <p className="text-white font-bold text-sm md:text-base leading-relaxed drop-shadow-lg">
                        {messages[i] || "Chúc chị luôn hạnh phúc 💕"}
                      </p>
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-3 right-3 bg-pink-500/90 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                    {i + 1}
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
      {/* <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
      
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            </motion.div>

    
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

       
            <motion.div
              className="relative w-full max-w-2xl aspect-[3/4] cursor-pointer z-[55]"
              style={{ perspective: "1000px" }}
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{
                  rotateY: overlayStep === 2 ? 180 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={selectedImage.src}
                    alt="enlarged"
                    className="w-full h-full object-contain bg-gradient-to-br from-pink-100 to-purple-100"
                  />
                  
                  <div className="absolute inset-0 border-8 border-white/30 rounded-3xl pointer-events-none" />
                </div>

                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-green-300 p-8 flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
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
      </AnimatePresence> */}
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
