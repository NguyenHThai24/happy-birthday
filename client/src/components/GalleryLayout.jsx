import React, { useState, useEffect } from "react";
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
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
  img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22
];

const GalleryLayout = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCenter = () => {
      setCenter({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    };
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  // công thức trái tim
  const heart = (t) => {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);
    return { x, y };
  };

  const positions = images.map((_, i) => {
    const t = (i / images.length) * Math.PI * 2;
    return heart(t);
  });

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Background 2 ảnh full màn hình */}
      <img
        src={img21}
        alt="bg1"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    

      {/* Trái tim */}
      <div className="absolute inset-0 z-10">
        {positions.map((pos, i) => {
          const scale = 20;
          const offsetY = -100; // dịch tim lên trên một chút
          const posX = pos.x * scale + center.x;
          const posY = -pos.y * scale + center.y + offsetY;

          return (
            <motion.img
              key={i}
              src={images[i]}
              alt={`heart-${i}`}
              className="absolute w-28 h-28 object-cover rounded-lg shadow-lg cursor-pointer"
              style={{ left: `${posX}px`, top: `${posY}px` }}
              whileHover={{ scale: 1.1, zIndex: 50, opacity: 1 }}
              onClick={() => setSelectedImage(images[i])}
            />
          );
        })}
      </div>

      {/* Overlay khi click ảnh */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0  bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="enlarged"
              className="max-w-[80%] max-h-[80%] rounded-lg shadow-xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryLayout;
