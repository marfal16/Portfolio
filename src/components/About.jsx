import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: "🎓",
    color: "text-orange-400",
    title: "Formazione",
    subtitle: "Dalle lingue al codice, la mia base",
  },
  {
    icon: "💻",
    color: "text-green-400",
    title: "SAP ABAP",
    subtitle: "Scrivere soluzioni precise ogni giorno",
  },
  {
    icon: "🚀",
    color: "text-blue-400",
    title: "Sviluppo Web",
    subtitle: "Progetti creativi in React e PostgreSQL",
  },
];

const About = () => {
  return (
    <div
      id="about"
      className="scroll-mt-24 flex flex-col md:flex-row items-start gap-12 md:gap-16 py-16 px-6 md:px-16 
                 bg-gradient-to-b from-blue-950/10 to-blue-950/40"
    >
      {/* Testo */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 drop-shadow-lg mb-6">
          Dal linguaggio <br></br> alla logica
        </h2>
        <p className="text-lg text-blue-900/70 mb-6">
          Il mio percorso è un viaggio attraverso diversi linguaggi: dalle lingue straniere e letteratura al codice.
        </p>
        <p className="text-lg text-blue-900/70 mb-6">
          Oggi trasformo requisiti aziendali in soluzioni SAP ABAP, risolvendo problemi complessi con logica e precisione.
        </p>
        <p className="text-lg text-blue-900/70">
          Nel tempo libero, esploro il mondo del web creando progetti in React e PostgreSQL, sperimentando nuovi modi di comunicare con il codice.
        </p>
      </motion.div>

      {/* Step cards */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-8"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-blue-900/70 text-white p-6 rounded-2xl shadow-lg w-full 
                       hover:scale-105 hover:shadow-[0_0_20px_rgba(255,140,0,0.5)] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span
              role="img"
              aria-label={step.title}
              className={`text-4xl ${step.color}`}
              style={{ fontSize: "2.5rem" }}
            >
              {step.icon}
            </span>
            <div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-sm text-white/80">{step.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
