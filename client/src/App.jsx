// App.jsx
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import FallingLetters from "./pages/FallingLetters";
import GalleryLayout from "./pages/GalleryLayout";
import PasswordGate from "./components/PasswordGate";

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [player, setPlayer] = useState(null);
  const [authenticated, setAuthenticated] = useState(false); // ✅ mật mã đã đúng chưa

  useEffect(() => {
    if (authenticated) {
      const timer = setTimeout(() => {
        setShowGallery(true);
      }, 105000); // 30 giây
      return () => clearTimeout(timer);
    }
  }, [authenticated]);

  return (
    <div className="w-screen h-screen relative">
      {!authenticated ? (
        // Nếu chưa nhập mật mã đúng → hiện màn hình nhập mật mã
        <PasswordGate onSuccess={() => setAuthenticated(true)} />
      ) : (
        <>
          {/* Player ẩn, luôn tồn tại khi authenticated = true */}
          <YouTube
            videoId="2-V3-WM-T-Y"
            opts={{
              height: "0",
              width: "0",
              playerVars: {
                autoplay: 1,
                loop: 1,
                playlist: "2-V3-WM-T-Y",
              },
            }}
            onReady={(e) => {
              setPlayer(e.target);
              e.target.setVolume(80);
            }}
          />

          {/* Stage content */}
          {!showGallery ? <FallingLetters /> : <GalleryLayout />}
        </>
      )}
    </div>
  );
}

export default App;
