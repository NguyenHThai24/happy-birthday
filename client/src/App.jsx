// App.jsx
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import FallingLetters from "./pages/FallingLetters";
import GalleryLayout from "./pages/GalleryLayout";

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGallery(true);
    }, 30000); // 30 giây
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen relative">
      {/* Player ẩn, luôn tồn tại */}
      <YouTube
        videoId="2-V3-WM-T-Y" // ID video YouTube
        opts={{
          height: "0",
          width: "0",
          playerVars: {
            autoplay: 1, // tự động phát
            loop: 1, // lặp lại
            playlist: "2-V3-WM-T-Y",
          },
        }}
        onReady={(e) => {
          setPlayer(e.target);
          e.target.setVolume(80); // chỉnh âm lượng
        }}
      />

      {/* Stage content */}
      {!showGallery ? <FallingLetters /> : <GalleryLayout />}
    </div>
  );
}

export default App;
