import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto w-full space-y-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Progetti</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">AK Service – Sito web</h3>
            <p className="text-gray-700 mb-2">
              React + Vite, PostgreSQL, Stripe, PayPal. Shop online per corsi formativi.
            </p>
            <a href="https://www.akservice.it" className="text-orange-600 font-medium hover:underline">
              Vedi progetto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
