import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
  icon: <FaEnvelope size={20} color="#e8a2a2ff" />,
  label: "Email",
  value: "mariafalanga00@gmail.com",
  link: "mailto:mariafalanga00@gmail.com"
},
 {
  icon: <FaLinkedin size={20} color="#0A66C2" />,
  label: "LinkedIn",
  value: "LinkedIn - Maria Falanga",
  link: "https://www.linkedin.com/in/maria-falanga-74836918b/"
}
,
 {
  icon: <FaGithub size={20} color="#181717" />,
  label: "GitHub",
  value: "github.com/marfal16",
  link: "https://github.com/marfal16"
},
];

const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-24 min-h-screen flex flex-col items-center 
    justify-center py-12 px-4 bg-gradient-to-b from-gray-100 to-blue-950/40">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center">
        Contatti
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Vuoi entrare in contatto con me? Ecco dove trovarmi:
      </p>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {contacts.map((c, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow-lg"
            whileHover={{ rotateY: 10, scale: 1.03, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl">{c.icon}</span>
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 font-medium hover:underline transition-colors"
            >
              {c.value}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
