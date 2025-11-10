import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "SAP ABAP",
    icon: "🖥️",
    skills: [
      "Sviluppo ABAP: Report, ALV, Function Module, Module Pool",
      "Stampe: SAPScript, Smartforms, Adobe Form",
      "Integrazioni: OData, SOAP, REST (Web Service)",
      "Estensioni: BADI, User-Exit",
      "Eclipse ADT: CDS View & RAP (OData exposure, Fiori preview)",
    ],

  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      "Frontend: React + Vite + Tailwind",
      "Backend: PostgreSQL / pgAdmin / Supabase",
      "Deploy & Hosting: Vercel / Render",
      "Pagamenti: Stripe & PayPal",
      "Gestione domini: Aruba"
    ],
  },
  {
    title: "Soft Skills",
    icon: "💡",
    skills: [
      "Comunicazione chiara ed efficace",
      "Problem solving",
      "Collaborazione in team",
      "Gestione del tempo e delle priorità"
    ],
  }
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden"
    >
      {/* Sfondo animato */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-gray-50 to-gray-100 animate-[wave_10s_linear_infinite] pointer-events-none"></div>

      <div className="relative max-w-6xl w-full space-y-12 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-950 mb-12 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          Competenze
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg
                         hover:shadow-2xl hover:-translate-y-3 hover:scale-105
                         transition-transform transform relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl text-orange-500 drop-shadow-[0_0_6px_rgba(255,140,0,0.4)]">
                  {section.icon}
                </span>
                <h3 className="text-2xl font-bold text-blue-950">{section.title}</h3>
              </div>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {section.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="transition-colors duration-300 hover:text-orange-500"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animazione CSS per lo sfondo */}
      <style>
        {`
          @keyframes wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-[wave_10s_linear_infinite] {
            background-size: 200% 200%;
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
