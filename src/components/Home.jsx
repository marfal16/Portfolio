import React from 'react';

const Home = () => {
  return (
    <div id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-orange-100 to-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Da lettere a codice
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Sviluppo in SAP ABAP e creo progetti web con passione e curiosità.
      </p>
      <a href="#about" className="px-6 py-2 bg-orange-500 text-white rounded-2xl shadow-md hover:bg-orange-600">
        Scopri di più
      </a>
    </div>
  );
};

export default Home;