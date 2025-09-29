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

// Đảo ngược mảng
const reversedImages = [...images].reverse();

// Mỗi ảnh có lời chúc riêng
const messages = {
  0: "Chúc bạn luôn vui vẻ và hạnh phúc 💖",
  1: "Chúc bạn sinh nhật thật tuyệt vời 🎂",
  2: "Luôn mạnh khỏe và thành công nhé 💪",
  3: "Mọi điều tốt đẹp nhất sẽ đến với bạn ✨",
  // thêm cho các ảnh khác...
};

const GalleryLayout = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [overlayStep, setOverlayStep] = useState(0); // 0 = tắt, 1 = zoom, 2 = mặt sau

  const handleOverlayClick = () => {
    if (overlayStep === 1) {
      setOverlayStep(2); // lần 2 → lật
    } else if (overlayStep === 2) {
      setOverlayStep(0); // lần 3 → thoát
      setSelectedImage(null);
    }
  };

  return (
    <div className="w-screen h-screen relative">
      {/* Background cố định */}
      <img
        src={img21}
        alt="bg21"
        className="fixed inset-0 w-full h-full object-cover z-0"
      />

      {/* Grid ảnh */}
      <div className="absolute inset-0 z-10 opacity-55 overflow-y-auto p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {reversedImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`grid-${i}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, zIndex: 50 }}
              onClick={() => {
                setSelectedImage({ src: img, index: i });
                setOverlayStep(1);
              }}
            />
          ))}
        </div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex opacity-35 items-center justify-center z-50 perspective"
            style={{
              backgroundImage: `url(${img16})`, // đổi sang ảnh bg bạn thích
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            {/* Card flip */}
            <motion.div
              className="relative w-[80%] max-w-lg h-[80%] max-h-[600px] cursor-pointer"
              animate={{
                rotateY: overlayStep === 2 ? 180 : 0,
              }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Mặt trước (ảnh) */}
              <div className="absolute inset-0 backface-hidden flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt="enlarged"
                  className="w-full h-full object-contain rounded-lg shadow-xl"
                />
              </div>

              {/* Mặt sau (lời chúc) */}
              <div
                className="absolute inset-0 backface-hidden flex items-center justify-center bg-white opacity-80 rounded-lg shadow-xl p-6"
                style={{ transform: "rotateY(180deg)" }}
              >
                <p className="text-xl font-bold text-center text-pink-600">
                  {messages[selectedImage.index] ||
                    "Chúc bạn luôn hạnh phúc 💕"}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryLayout;
