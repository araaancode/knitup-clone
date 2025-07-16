import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  // Show second text after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirst(false);
      setShowSecond(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Play video after second text appears
  useEffect(() => {
    if (showSecond && videoRef.current) {
      videoRef.current.play();
    }
  }, [showSecond]);

  const textVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Poster as fallback image */}
      {videoEnded && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img
            src="../images/longsleeve.png" 
            alt="Video Poster"
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* Video plays only once */}
      {!videoEnded && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          muted
          playsInline
          onEnded={() => setVideoEnded(true)}
          preload="none" 
        >
          <source src="../videos/longSleeve_hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Animated Text */}
      <div className="relative z-20 flex items-center h-full px-6 md:px-16">
        <AnimatePresence mode="wait">
          {showFirst && (
            <motion.div
              key="first"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.2, type: "spring", stiffness: 70 }}
              className="text-left"
            >
              <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)]">
                Welcome to Your 3D World
              </h1>
            </motion.div>
          )}

          {showSecond && (
            <motion.div
              key="second"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.2, type: "spring", stiffness: 70 }}
              className="text-left"
            >
              <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)]">
                Let's Build the Future
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

