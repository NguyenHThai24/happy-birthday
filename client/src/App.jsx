import { useState, useEffect } from "react";
import FallingLetters from "./pages/FallingLetters";
import GalleryLayout from "./pages/GalleryLayout";

function App() {
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGallery(true);
    }, 30000); // 7 giây
    return () => clearTimeout(timer);
  }, []);

  return <>{!showGallery ? <FallingLetters /> : <GalleryLayout />}</>;
}

export default App;
