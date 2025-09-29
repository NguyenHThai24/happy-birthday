import { useState } from "react";

import BackgroundLetters from "../components/BackgroundLetters";
import Countdown from "../components/Countdown";
import Firework from "../components/Firework";
import WordAnimation from "../components/WordAnimation";
import EmojiRain from "../components/EmojiRain";

const FallingLetters = () => {
  const [stage, setStage] = useState("countdown");

  // const birthdayText = "HAPPY BIRTHDAY".split("");
  // const nameText = "LÂM BỬU LINH".split("");

  const centerY = window.innerHeight / 2;

  const isBeforeFirework = stage === "countdown";

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Background */}
      {isBeforeFirework ? <BackgroundLetters /> : <EmojiRain />}

      {/* Stage logic */}
      {stage === "countdown" && (
        <Countdown onComplete={() => setStage("firework")} />
      )}

      {stage === "firework" && (
        <Firework onComplete={() => setStage("birthday")} />
      )}

      {stage === "birthday" && (
        <>
          {/* HAPPY */}
          <WordAnimation
            letters={"HAPPY".split("")}
            y={centerY - 30} // cao hơn một chút
            stayTime={5000}
          />
          {/* BIRTHDAY */}
          <WordAnimation
            letters={"BIRTHDAY".split("")}
            y={centerY + 20} // thấp hơn một chút
            stayTime={5000}
            onComplete={() => setStage("name")}
          />
        </>
      )}

      {stage === "name" && (
        <>
          {/* LÂM */}
          <WordAnimation
            letters={"LÂM".split("")}
            y={centerY - 30}
            stayTime={5000}
          />
          {/* BỬU LINH */}
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
