// App.jsx
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import FallingLetters from "./pages/FallingLetters";
import GalleryLayout from "./pages/GalleryLayout";
import ConfessionStage from "./pages/ConfessionStage";
import PasswordGate from "./components/PasswordGate";

function App() {
  const [stage, setStage] = useState("password"); // password -> fallingLetters -> gallery -> confession
  const [player, setPlayer] = useState(null);
  const [confessionResult, setConfessionResult] = useState(null);

  useEffect(() => {
    // Sau khi xem FallingLetters xong (105s), chuyển sang Gallery
    if (stage === "fallingLetters") {
      const timer = setTimeout(() => {
        setStage("gallery");
      }, 105000); // 105 giây
      return () => clearTimeout(timer);
    }

    // Sau khi xem Gallery (tùy chọn: 60s hoặc scroll hết ảnh), chuyển sang Confession
    // if (stage === "gallery") {
    //   const timer = setTimeout(() => {
    //     setStage("confession");
    //   }, 60000); // 60 giây xem ảnh
    //   return () => clearTimeout(timer);
    // }
  }, [stage]);

  const handlePasswordSuccess = () => {
    setStage("fallingLetters");
  };

  const handleConfessionComplete = (result) => {
    setConfessionResult(result);
    // Có thể thêm màn hình kết thúc ở đây
    // hoặc loop lại gallery
    setTimeout(() => {
      setStage("gallery"); // quay lại xem ảnh
    }, 5000);
  };

  return (
    <div className="w-screen h-screen relative">
      {stage === "password" && (
        <PasswordGate onSuccess={handlePasswordSuccess} />
      )}

      {stage !== "password" && (
        <>
          {/* YouTube player - luôn chạy khi đã qua password */}
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

          {/* Các stage content */}
          {stage === "fallingLetters" && <FallingLetters />}
          {stage === "gallery" && (
            <GalleryLayout onConfession={() => setStage("confession")} />
          )}
          {stage === "confession" && (
            <ConfessionStage onComplete={handleConfessionComplete} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
