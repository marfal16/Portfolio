import React from "react";

const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">Il mio percorso</h2>
        <p className="text-lg text-gray-600 mb-6">
          Il mio percorso è stato un vero e proprio viaggio tra i linguaggi. Ho iniziato esplorando le lingue straniere al liceo e ho approfondito la lingua italiana e le scienze umane all'università. Questa esperienza mi ha insegnato che la struttura del linguaggio è la chiave per comunicare in modo chiaro e per risolvere problemi complessi, indipendentemente dal contesto.
        </p>
        <p className="text-lg text-gray-600">
          Ho quindi deciso di esplorare un nuovo tipo di linguaggio: quello del codice. Ho scoperto che il problem solving del mondo ABAP, la sintassi di React e l'organizzazione dei dati sono solo un'altra forma di comunicazione.
        </p>
        <p className="text-lg text-gray-600">
          Oggi, unisco la mia padronanza di questi mondi apparentemente diversi per creare prodotti digitali che non solo funzionano, ma che sono anche intuitivi, ben strutturati e che raccontano una storia.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center gap-4 bg-gray-100 p-6 rounded-2xl shadow-lg w-full">
          <span className="text-4xl text-blue-500" style={{ fontSize: '2.5rem' }}>🎓</span>
          <div>
            <h3 className="text-xl font-bold">Formazione Umanistica</h3>
            <p className="text-sm text-gray-500">Lettere e Lingue</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 p-6 rounded-2xl shadow-lg w-full">
          <span className="text-4xl text-green-500" style={{ fontSize: '2.5rem' }}>💻</span>
          <div>
            <h3 className="text-xl font-bold">Transizione alla Tecnologia</h3>
            <p className="text-sm text-gray-500">Inizio con la programmazione ABAP</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 p-6 rounded-2xl shadow-lg w-full">
          <span className="text-4xl text-orange-500" style={{ fontSize: '2.5rem' }}>🚀</span>
          <div>
            <h3 className="text-xl font-bold">Sviluppo Web</h3>
            <p className="text-sm text-gray-500">Unione di frontend e backend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
