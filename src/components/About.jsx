import React from "react";
import { motion } from "framer-motion";


const steps = [
  {
    icon: "🎓",
    color: "text-blue-500",
    title: "Formazione",
    subtitle: "Lingue straniere e Lettere",
  },
  {
    icon: "💻",
    color: "text-green-500",
    title: "SAP ABAP",
    subtitle: "Il mio lavoro quotidiano: sviluppo codice e problem solving",
  },
  {
    icon: "🚀",
    color: "text-orange-500",
    title: "Sviluppo Web",
    subtitle: "Hobby e progetti personali in React e PostgreSQL",
  },
];

const About = () => {
  return (
      <div
        id="about"
        className="scroll-mt-24 flex flex-col md:flex-row items-start gap-12 md:gap-16 py-12 px-6 md:px-16 bg-transparent"
      >     
      {/* Testo */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Il mio percorso
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Il mio percorso è stato un viaggio attraverso diversi tipi di linguaggi. Ho iniziato con le lingue straniere al liceo e, all’università in Lettere, mi sono concentrata su lingua italiana, letteratura e comunicazione, approfondendo anche tematiche di disinformazione e fake news per la mia tesi.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Questa passione per comprendere come funzionano i linguaggi e la loro logica mi ha portata nel mondo della programmazione: oggi sviluppo codice in SAP ABAP, scrivendo soluzioni precise e strutturate che risolvono problemi complessi.
        </p>
        <p className="text-lg text-gray-600">
          Parallelamente, esploro lo sviluppo web come hobby, creando progetti in React e PostgreSQL per continuare a imparare e sperimentare nuovi linguaggi.
        </p>
      </motion.div>

      {/* Step cards */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg w-full"
            whileHover={{ rotateY: 10, scale: 1.03, transition: { duration: 0.3 } }}
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
              <p className="text-sm text-gray-500">{step.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
