// App.jsx
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import FallingLetters from "./pages/FallingLetters";
import GalleryLayout from "./pages/GalleryLayout";
import ConfessionStage from "./pages/ConfessionStage";
import PasswordGate from "./components/PasswordGate";
import { useFullscreenOrientation } from "./hooks/useFullscreenOrientation";

function App() {
  const [stage, setStage] = useState("password");
  const [player, setPlayer] = useState(null);
  const [confessionResult, setConfessionResult] = useState(null);

  const { enterFullscreenAndLock, lockPortrait } = useFullscreenOrientation();

  useEffect(() => {
    if (stage === "fallingLetters") {
      const timer = setTimeout(() => {
        setStage("gallery");
      }, 102000);
      return () => clearTimeout(timer);
    }

    if (stage === "gallery") {
      lockPortrait(); // ✅ quay lại portrait khi sang gallery
    }
  }, [stage, lockPortrait]);

  const handlePasswordSuccess = async () => {
    await enterFullscreenAndLock("landscape"); // ✅ lock ngang
    setStage("fallingLetters");
  };

  const handleConfessionComplete = (result) => {
    setConfessionResult(result);
    setTimeout(() => {
      setStage("gallery");
    }, 5000);
  };

  return (
    <div className="w-screen h-screen relative bg-black">
      {stage === "password" && (
        <PasswordGate onSuccess={handlePasswordSuccess} />
      )}

      {stage !== "password" && (
        <>
          <YouTube
            videoId="2-V3-WM-T-Y"
            opts={{
              height: "0",
              width: "0",
              playerVars: { autoplay: 1, loop: 1, playlist: "2-V3-WM-T-Y" },
            }}
            onReady={(e) => {
              setPlayer(e.target);
              e.target.setVolume(80);
            }}
          />

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
