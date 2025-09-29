// FallingLetters.jsx
import { useState } from "react";
import BackgroundLetters from "../components/BackgroundLetters";
import Countdown from "../components/Countdown";
import Firework from "../components/Firework";
import WordAnimation from "../components/WordAnimation";
import EmojiRain from "../components/EmojiRain";

const FallingLetters = ({ onStartMusic }) => {
  const [stage, setStage] = useState("countdown"); // 🚀 bắt đầu luôn từ countdown

  const centerY = window.innerHeight / 2;
  const isBeforeFirework = stage === "countdown";

  const handleCountdownComplete = () => {
    onStartMusic?.();
    setStage("firework");
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden text-white">
      {/* Background */}
      {isBeforeFirework ? <BackgroundLetters /> : <EmojiRain />}

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
