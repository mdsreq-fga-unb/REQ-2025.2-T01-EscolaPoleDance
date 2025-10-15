import React from 'react';
import InfoCard from '../ui/InfoCard';
import { Button } from '../ui/button';

const LocationSection: React.FC = () => {
  return (
    <div className="bg-purple-100 px-4 sm:px-8 md:px-16 lg:px-[96px] xl:px-[90px] pt-12 pb-12">
      {/* Header */}
      <div className="mb-8 text-start mx-auto">
        <h2 className="text-purple-900 text-3xl sm:text-4xl md:text-5xl font-semibold font-['Montserrat'] leading-tight">
          Visite nossa escola
        </h2>
        <p className="text-purple-900 text-base font-medium font-['Montserrat'] leading-tight mt-4">
          Descubra um espaço dedicado ao empoderamento, força e expressão artística.<br />
          Entre em contato para agendar sua aula experimental.
        </p>
      </div>

      {/* Content Layout - Two Columns */}
      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] lg:items-start gap-8">
        {/* Left Column - Map */}
        <div className="relative w-full lg:w-auto hidden lg:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.255166080466!2d-48.05437969999999!3d-16.0002271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2a9a143241c1%3A0x3f03e2d7890a4f0f!2sLady&#39;s%20Escola%20de%20Pole%20Dance!5e0!3m2!1spt-BR!2sbr!4v1760469553587!5m2!1spt-BR!2sbr"
            width="680"
            height="495"
            className="w-full lg:w-[680px]"
            style={{ border: '1px solid #D6B5DE', borderRadius: '10px' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lady's Escola de Pole Dance Location"  
          ></iframe>
          <div className="absolute bottom-4 left-4">
            <Button 
              className="w-64 px-4 py-3 bg-purple-900 hover:bg-purple-800 text-white text-sm font-medium font-['Montserrat'] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"
              asChild>
              <a 
                href="https://www.google.com/maps/place/Lady's+Escola+de+Pole+Dance/@-16.0002271,-48.0543797,17z/data=!3m1!4b1!4m6!3m5!1s0x935a2a9a143241c1:0x3f03e2d7890a4f0f!8m2!3d-16.0002271!4d-48.0522048!16s%2Fg%2F11c0q8q9q9"
                target="_blank"
                rel="noopener noreferrer">
                Abrir no Google Maps
              </a>
            </Button>
          </div>
        </div>

        {/* Right Column - Information Cards */}
        <div className="flex flex-col gap-5 w-full lg:w-auto lg:justify-start">
          <InfoCard title="Endereço" showMapButton={true}>
          Quadra 45 lote 08 loja B, St. Leste - Gama, Brasília - DF, 72440-450
          </InfoCard>

          <InfoCard title="Horário">
            Segunda a Sexta: 9h - 21h<br />
            Sábado: 9h - 18h<br />
            Domingo: Fechado
          </InfoCard>

          <InfoCard title="Contato">
            <div className="space-y-1">
              <p>Tel: <span className="underline text-purple-500">(61) 99999-9999</span></p>
              <p>Email: <span className="underline text-purple-500">contato@escolapoledance.com</span></p>
              <p>Instagram: <span className="underline text-purple-500">@escolapoledance</span></p>
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;