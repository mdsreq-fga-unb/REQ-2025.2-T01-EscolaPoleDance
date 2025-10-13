import React from 'react';

const CTASection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-purple-950 min-h-screen flex flex-col justify-center items-center">
      {/* Title */}
      <h2 className="text-center text-purple-50 text-5xl font-bold font-['Montserrat'] leading-[55px] mb-8">
        Dê o primeiro passo para uma nova versão de si mesma
      </h2>

      {/* Button Group */}
      <div className="flex justify-center items-center gap-4">
        {/* Primary Button */}
        <button className="px-6 py-2.5 bg-purple-50 rounded-lg">
          <span className="text-purple-950 text-sm font-medium font-['Geist']">
            Marque uma aula experimental
          </span>
        </button>

        {/* Secondary Button */}
        <button className="px-6 py-2.5 bg-transparent rounded-lg outline outline-1 outline-purple-50">
          <span className="text-purple-50 text-sm font-medium font-['Geist']">
            Faça sua matrícula
          </span>
        </button>

        {/* WhatsApp Button */}
        <button className="px-4 py-2 bg-green-500 rounded-lg inline-flex items-center gap-2">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <span className="text-white text-sm font-medium font-['Geist']">
            Entrar em contato pelo WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
};

export default CTASection;