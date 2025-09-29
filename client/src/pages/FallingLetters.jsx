// FallingLetters.jsx
import { useState } from "react";
import BackgroundLetters from "../components/BackgroundLetters";
import Countdown from "../components/Countdown";
import Firework from "../components/Firework";
import WordAnimation from "../components/WordAnimation";
import EmojiRain from "../components/EmojiRain";

const FallingLetters = ({ onStartMusic }) => {
  const [stage, setStage] = useState("waiting");

  const centerY = window.innerHeight / 2;
  const isBeforeFirework = stage === "countdown";

  const handleCountdownComplete = () => {
    onStartMusic?.(); // gọi hàm từ App để phát nhạc
    setStage("firework");
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden text-white">
      {/* Stage: Bấm để bắt đầu */}
      {stage === "waiting" && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <button
            onClick={() => setStage("countdown")}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-xl shadow-lg"
          >
            🎉 Bấm để bắt đầu 🎉
          </button>
        </div>
      )}

      {/* Background */}
      {stage !== "waiting" &&
        (isBeforeFirework ? <BackgroundLetters /> : <EmojiRain />)}

      {/* Stage logic */}
      {stage === "countdown" && (
        <Countdown onComplete={handleCountdownComplete} />
      )}

      {stage === "firework" && (
        <Firework onComplete={() => setStage("birthday")} />
      )}

      {stage === "birthday" && (
        <>
          <WordAnimation
            letters={"HAPPY".split("")}
            y={centerY - 30}
            stayTime={5000}
          />
          <WordAnimation
            letters={"BIRTHDAY".split("")}
            y={centerY + 20}
            stayTime={5000}
            onComplete={() => setStage("name")}
          />
        </>
      )}

      {stage === "name" && (
        <>
          <WordAnimation
            letters={"LÂM".split("")}
            y={centerY - 30}
            stayTime={5000}
          />
          <WordAnimation
            letters={"BỬU LINH".split("")}
            y={centerY + 20}
            stayTime={5000}
            onComplete={() => setStage("lineText")}
          />
        </>
      )}

      {stage === "lineText" && (
        <WordAnimation
          letters={"01/11/2025".split("")}
          y={centerY}
          stayTime={5000}
        />
      )}
    </div>
  );
};

export default FallingLetters;
