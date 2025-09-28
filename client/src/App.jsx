import { useState, useEffect } from "react";
import FallingLetters from "./components/FallingLetters";
import GalleryLayout from "./components/GalleryLayout";

function App() {
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGallery(true);
    }, 15000); // 7 giây
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showGallery ? <FallingLetters /> : <GalleryLayout />}
    </>
  );
}

export default App;

