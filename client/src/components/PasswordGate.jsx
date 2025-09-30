import { useState } from "react";

const PasswordGate = ({ onSuccess }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = () => {
    if (code === "0111") {
      setError("");
      onSuccess();
    } else {
      setError("Sai mật mã, thử lại!");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setCode("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-gradient-to-br from-pink-100 via-green-50 to-pink-100">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-200/20 rounded-full blur-2xl animate-pulse delay-300"></div>

      <div
        className={`relative bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl text-center max-w-md w-full mx-4 border-2 border-pink-200/50 ${isShaking ? "animate-shake" : ""
          }`}
        style={{
          animation: isShaking ? "shake 0.5s" : "none",
        }}
      >
        {/* Lock icon with gradient */}
        <div className="mb-6 relative">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-400 to-green-400 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-400 rounded-full animate-ping"></div>
        </div>

        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
          Mở Khóa Bất Ngờ
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Nhập ngày tháng sinh nhật của chị nhé 🎂
        </p>

        {/* Input container */}
        <div className="relative mb-6">
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyPress={handleKeyPress}
            maxLength={4}
            className="w-full px-6 py-4 text-gray-800 rounded-2xl text-center text-2xl tracking-[1em] font-bold border-3 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-200/50 transition-all bg-gradient-to-r from-pink-50 to-green-50 shadow-inner"
            placeholder="••••"
            autoFocus
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 via-pink-400 to-green-400 hover:from-pink-600 hover:via-pink-500 hover:to-green-500 text-white rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 active:scale-95"
        >
          <span className="flex items-center justify-center gap-2">
            Xác nhận
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border-2 border-red-200 rounded-xl animate-bounce">
            <p className="text-red-600 font-medium text-sm flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </p>
          </div>
        )}

        {/* Hint */}
        <p className="mt-6 text-xs text-gray-400 italic">
          Gợi ý: 4 chữ số (DDMM)
        </p>
      </div>

      <style>{`
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
  }
`}</style>

    </div>
  );
};

export default PasswordGate;
