import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="scroll-mt-24 relative min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden
    bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto w-full space-y-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
          Progetti
        </h2>

        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-8">
          {/* Box progetti ABAP riservati – card centrale in alto */}
          <motion.div
            className="md:col-span-2 p-8 bg-white rounded-2xl shadow-lg border-dashed border-2 border-gray-300 flex flex-col justify-center items-center hover:scale-[1.02] transition-transform hover:bg-orange-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl mb-4">🛠️</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Progetti SAP ABAP</h3>
            <p className="text-gray-600">
              I progetti professionali in SAP ABAP non sono esposti pubblicamente.
            </p>
          </motion.div>

          {/* AK Service – Sito web */}
          <motion.div
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-[1.03] hover:bg-gradient-to-br hover:from-orange-50 hover:to-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 5, rotateX: 2 }}
          >
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              AK Service – Sito web
            </h3>
            <p className="text-gray-700 mb-4">
              Sito web sviluppato end-to-end con React + Vite, comprendente frontend interattivo, gestione backend dei dati dei corsi memorizzati su database, e integrazione dei pagamenti online tramite Stripe e PayPal.
            </p>
            <a
              href="https://www.akservice.it"
              className="text-orange-600 font-medium hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vedi progetto
            </a>
          </motion.div>

          {/* Portfolio personale */}
          <motion.div
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-[1.03] hover:bg-gradient-to-br hover:from-orange-50 hover:to-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 5, rotateX: 2 }}
          >
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              Portfolio personale – Questo sito
            </h3>
            <p className="text-gray-700 mb-4">
              Sviluppo di questo portfolio come progetto web completo, utilizzando React + Vite + Tailwind, deploy su Vercel.
            </p>
          {/*  <a
              href="https://www.akservice.it"
              className="text-orange-600 font-medium hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vedi progetto
            </a> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
