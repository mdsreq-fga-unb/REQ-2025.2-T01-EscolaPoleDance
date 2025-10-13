import React from 'react';
import InfoCard from '../ui/InfoCard';

const LocationSection: React.FC = () => {
  return (
    <div className="bg-purple-100 px-24 pt-14 pb-[86px]">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-purple-900 text-5xl font-semibold font-['Montserrat'] leading-[55px]">
          Visite nossa escola
        </h2>
        <p className="text-purple-900 text-base font-medium font-['Montserrat'] leading-tight">
          Descubra um espaço dedicado ao empoderamento, força e expressão artística. Entre em contato para agendar sua aula experimental.
        </p>
      </div>

      {/* Content Layout - Two Columns */}
      <div className="flex gap-8">
        {/* Left Column - Map */}
        <div className="relative">
          <img 
            src="placeholder-map.jpg" 
            alt="Mapa da localização" 
            className="w-[787px] h-[490px] rounded-xl border border-zinc-300"
          />
          <button className="absolute bottom-4 left-4 w-64 px-4 py-3 bg-purple-900 rounded-md shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
            <span className="text-white text-sm font-medium font-['Inter']">
              Abrir no Google Maps
            </span>
          </button>
        </div>

        {/* Right Column - Information Cards */}
        <div className="flex flex-col gap-5">
          <InfoCard title="Endereço">
            Rua das Acácias, 123<br />
            Asa Sul - Brasília/DF<br />
            CEP: 70000-000
          </InfoCard>

          <InfoCard title="Horário">
            Segunda a Sexta: 8h às 20h<br />
            Sábado: 9h às 16h<br />
            Domingo: Fechado
          </InfoCard>

          <InfoCard title="Contato">
            <div className="space-y-1">
              <p>📞 <span className="underline text-purple-500">(61) 99999-9999</span></p>
              <p>✉️ <span className="underline text-purple-500">contato@escolapoledance.com</span></p>
              <p>📱 <span className="underline text-purple-500">@escolapoledance</span></p>
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;