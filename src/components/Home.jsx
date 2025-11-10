import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Background3D from "./Background3D";

const Home = () => {
  const [buttonText, setButtonText] = useState("");
  const fullButtonText = "Avvia";
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect per il pulsante
  useEffect(() => {
    let typingTimeout;

    const startTyping = (index = 0) => {
      if (index <= fullButtonText.length) {
        setButtonText(fullButtonText.substring(0, index));
        setIsTyping(index < fullButtonText.length);
        typingTimeout = setTimeout(() => startTyping(index + 1), 90);
      } else {
        typingTimeout = setTimeout(() => startTyping(0), 2000);
      }
    };

    startTyping();

    return () => clearTimeout(typingTimeout);
  }, [fullButtonText]);

  return (
    <div
  id="home"
  className="scroll-mt-24 h-screen relative flex flex-col justify-start sm:justify-center items-center text-center px-4 pt-6 sm:pt-0 overflow-hidden"
>
  {/* Sfondo animato futuristico */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {/* Gradiente animato */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-950 to-blue-950 bg-[length:200%_200%] animate-gradient-bg"></div>

    {/* Linee luminose sottili */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[1px] h-full bg-white/20 animate-fade-up"
          style={{ left: `${i * 5}%`, animationDelay: `${i * 0.3}s` }}
        ></div>
      ))}
    </div>

    {/* Avatar 3D */}
    <Background3D />
  </div>

  {/* Contenuto principale */}
  <div className="relative z-10 flex flex-col items-center">
    <motion.h2
      className="text-4xl md:text-6xl mb-4 tracking-wide text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Parole in Codice
    </motion.h2>

    <motion.p
      className="text-lg md:text-xl mb-6 max-w-xl text-white/90 text-center drop-shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      Sviluppo soluzioni SAP ABAP <br />
      e sperimento progetti Web.
    </motion.p>

    <div className="mt-72 sm:mt-0 relative z-20">
      <motion.a
        href="#about"
        className="cursor-pointer select-none relative font-mono text-3xl sm:text-4xl px-6 py-3 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)] inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        whileHover={{ y: -3, scale: 1.05 }}
      >
        {/* Sfondo pulsante */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-800 via-orange-700 to-red-700 opacity-95 pointer-events-none blur-[0.5px]"></div>

        {/* Glow pulsante */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 15px rgba(255,140,0,0.3)",
              "0 0 25px rgba(255,80,0,0.45)",
              "0 0 15px rgba(255,140,0,0.3)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        ></motion.div>

        {/* Testo + cursore */}
        <motion.span
          animate={{ y: [0, -1.5, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="relative z-10 text-white block text-center leading-snug"
        >
          {buttonText}
          {isTyping && (
            <span className="inline-block w-2 h-6 ml-2 bg-white animate-blink"></span>
          )}
        </motion.span>

        {/* Glow esterno */}
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 opacity-25 blur-2xl pointer-events-none"></div>
      </motion.a>
    </div>
  </div>
</div>
  );
};

export default Home;
