// FallingLetters.jsx - Extended Version
import { useState } from "react";
import BackgroundLetters from "../components/BackgroundLetters";
import Countdown from "../components/Countdown";
import Firework from "../components/Firework";
import WordAnimation from "../components/WordAnimation";
import EmojiRain from "../components/EmojiRain";

const FallingLetters = ({ onStartMusic }) => {
  const [stage, setStage] = useState("countdown");

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
        <Firework onComplete={() => setStage("intro")} />
      )}

      {/* Intro - Mở đầu ấm áp */}
      {stage === "intro" && (
        <>
          <WordAnimation
            letters={"HÔM NAY".split("")}
            y={centerY - 30}
            stayTime={3000}
          />
          <WordAnimation
            letters={"LÀ NGÀY ĐẶC BIỆT".split("")}
            y={centerY + 20}
            stayTime={3000}
            onComplete={() => setStage("intro2")}
          />
        </>
      )}

      {stage === "intro2" && (
        <WordAnimation
          letters={"CỦA MỘT NGƯỜI".split("")}
          y={centerY}
          stayTime={3500}
          onComplete={() => setStage("intro3")}
        />
      )}

      {stage === "intro3" && (
        <WordAnimation
          letters={"RẤT QUAN TRỌNG".split("")}
          y={centerY}
          stayTime={3500}
          onComplete={() => setStage("birthday")}
        />
      )}

      {/* Birthday wish */}
      {stage === "birthday" && (
        <>
          <WordAnimation
            letters={"HAPPY".split("")}
            y={centerY - 30}
            stayTime={4000}
          />
          <WordAnimation
            letters={"BIRTHDAY".split("")}
            y={centerY + 20}
            stayTime={4000}
            onComplete={() => setStage("name")}
          />
        </>
      )}

      {/* Name reveal */}
      {stage === "name" && (
        <>
          <WordAnimation
            letters={"LÂM".split("")}
            y={centerY - 30}
            stayTime={4000}
          />
          <WordAnimation
            letters={"BỬU LINH".split("")}
            y={centerY + 20}
            stayTime={4000}
            onComplete={() => setStage("age")}
          />
        </>
      )}

      {/* Age celebration */}
      {stage === "age" && (
        <>
          <WordAnimation
            letters={"CHÚC MỪNG".split("")}
            y={centerY - 30}
            stayTime={3000}
          />
          <WordAnimation
            letters={"TUỔI MỚI".split("")}
            y={centerY + 20}
            stayTime={3000}
            onComplete={() => setStage("wish1")}
          />
        </>
      )}

      {/* Wishes - Lời chúc 1 */}
      {stage === "wish1" && (
        <>
          <WordAnimation
            letters={"CHÚC CHỊ".split("")}
            y={centerY - 30}
            stayTime={3500}
          />
          <WordAnimation
            letters={"LUÔN XINH ĐẸP".split("")}
            y={centerY + 20}
            stayTime={3500}
            onComplete={() => setStage("wish2")}
          />
        </>
      )}

      {stage === "wish2" && (
        <>
          <WordAnimation
            letters={"LUÔN VUI VẺ".split("")}
            y={centerY - 30}
            stayTime={3500}
          />
          <WordAnimation
            letters={"TƯƠI TẮN".split("")}
            y={centerY + 20}
            stayTime={3500}
            onComplete={() => setStage("wish3")}
          />
        </>
      )}

      {stage === "wish3" && (
        <>
          <WordAnimation
            letters={"THÀNH CÔNG".split("")}
            y={centerY - 30}
            stayTime={3500}
          />
          <WordAnimation
            letters={"RỰC RỠ".split("")}
            y={centerY + 20}
            stayTime={3500}
            onComplete={() => setStage("wish4")}
          />
        </>
      )}

      {stage === "wish4" && (
        <>
          <WordAnimation
            letters={"SỨC KHỎE".split("")}
            y={centerY - 30}
            stayTime={3500}
          />
          <WordAnimation
            letters={"DỒI DÀO".split("")}
            y={centerY + 20}
            stayTime={3500}
            onComplete={() => setStage("wish5")}
          />
        </>
      )}

      {stage === "wish5" && (
        <>
          <WordAnimation
            letters={"MỌI ĐIỀU".split("")}
            y={centerY - 30}
            stayTime={3500}
          />
          <WordAnimation
            letters={"ĐỀU THUẬN LỢI".split("")}
            y={centerY + 20}
            stayTime={3500}
            onComplete={() => setStage("love")}
          />
        </>
      )}

      {/* Love message */}
      {stage === "love" && (
        <>
          <WordAnimation
            letters={"YÊU CHỊ".split("")}
            y={centerY - 30}
            stayTime={4000}
          />
          <WordAnimation
            letters={"RẤT NHIỀU".split("")}
            y={centerY + 20}
            stayTime={4000}
            onComplete={() => setStage("date")}
          />
        </>
      )}

      {/* {stage === "heart" && (
        <WordAnimation
          letters={"❤️❤️❤️".split("")}
          y={centerY}
          stayTime={4000}
          onComplete={() => setStage("date")}
        />
      )} */}

      {/* Date */}
      {stage === "date" && (
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
