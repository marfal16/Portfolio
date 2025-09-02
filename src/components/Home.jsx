import React from "react";
import { motion } from "framer-motion";
import Background3D from "./Background3D";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen relative flex flex-col justify-center items-center text-center px-4"
    >
      {/* Sfondo 3D */}
      <div className="absolute inset-0 z-0">
        <Background3D />
      </div>

      {/* Contenuto principale sopra */}
      <div className="relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 tracking-wide text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Da lettere a codice
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-6 max-w-xl text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Unisco la passione per le parole e la logica dei linguaggi di programmazione: sviluppo in SAP ABAP e creo progetti web con curiosità e precisione.
        </motion.p>

        <motion.a
          href="#about"
          className="px-6 py-3 bg-orange-500 text-white rounded-2xl shadow-md hover:bg-orange-600 hover:scale-105 transition-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ rotateY: 10 }}
        >
          Scopri di più
        </motion.a>
      </div>
    </div>
  );
};

export default Home;
