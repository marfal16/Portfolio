import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "SAP & ABAP",
    icon: "🖥️",
    skills: [
      "Report, ALV, Function Module, Module Pool",
      "Stampe: SAPScript, Adobe Form",
      "OData / SOAP / REST",
      "BADI, User-Exit",
      "Debugging & ottimizzazione"
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      "React + Vite + Tailwind",
      "PostgreSQL / pgAdmin / Supabase",
      "Deploy su Vercel / Render",
      "Stripe & PayPal integration",
      "Configurazione domini (Aruba)"
    ],
  },
  {
    title: "Soft Skills",
    icon: "💡",
    skills: [
      "Comunicazione chiara",
      "Problem solving",
      "Teamwork efficace",
      "Gestione tempo e priorità"
    ],
  }
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full space-y-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          Competenze
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-[1.03] hover:bg-gradient-to-br hover:from-orange-50 hover:to-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 5, rotateX: 2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{section.icon}</span>
                <h3 className="text-2xl font-bold">{section.title}</h3>
              </div>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {section.skills.map((skill, i) => (
                  <li key={i} className="transition-colors duration-300 hover:text-orange-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
