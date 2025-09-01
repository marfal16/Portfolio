import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Competenze</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">SAP & ABAP</h3>
            <ul className="space-y-1 text-gray-700">
              <li>ABAP Core (report, ALV, FM, IDoc, BAPI)</li>
              <li>Debugging & ottimizzazione</li>
              <li>OData services</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">Web Development</h3>
            <ul className="space-y-1 text-gray-700">
              <li>React + Vite</li>
              <li>PostgreSQL</li>
              <li>Stripe & PayPal integration</li>
              <li>Deploy con Vercel / Render</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">Soft Skills</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Comunicazione</li>
              <li>Problem solving</li>
              <li>Lavoro in team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
