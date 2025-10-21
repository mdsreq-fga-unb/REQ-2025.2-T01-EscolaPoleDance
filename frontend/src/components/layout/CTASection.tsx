import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const CTASection: React.FC = () => {
  // Configurações do WhatsApp
  const whatsappConfig = {
    number: "61993242268",
    message: "Olá! Gostaria de saber mais sobre as aulas de pole dance da Lady's Escola."
  };

  // Função para gerar URL do WhatsApp
  const generateWhatsAppUrl = () => {
    const baseUrl = `https://wa.me/${whatsappConfig.number}`;
    const message = encodeURIComponent(whatsappConfig.message);
    return `${baseUrl}?text=${message}`;
  };

  // Função para abrir WhatsApp
  const handleWhatsAppClick = () => {
    window.open(generateWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gradient-to-r from-fuchsia-pink-900 to-fuchsia-pink-950 h-80 flex flex-col justify-center items-center px-6 lg:px-[90px] py-10">
      {/* Title */}
      <h2 className="text-center text-fuchsia-pink-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Montserrat'] leading-tight mb-4">
        Dê o primeiro passo para uma nova versão de si mesma.
      </h2>

      {/* Button Group */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
        
        <Link to="/404">
          <Button
            variant="outline" size="lg" className="w-full lg:w-auto lg:min-w-[200px] bg-fuchsia-pink-50 text-fuchsia-pink-950 hover:bg-fuchsia-pink-600 hover:text-white">
            Marque uma aula experimental
          </Button>
        </Link>
        <Link to="/404">
          <Button
            variant="outline" size="lg" className="w-full lg:w-auto lg:min-w-[200px] border-fuchsia-pink-50 text-fuchsia-pink-50 bg-transparent hover:bg-fuchsia-pink-800">
            Faça sua matrícula
          </Button>
        </Link>
        <Button
          onClick={handleWhatsAppClick}
          size="lg" className="w-full lg:w-auto lg:min-w-[200px] bg-green-500 text-white hover:bg-green-600 hover:text-white">
          <FaWhatsapp className="mr-0.5" />
          Entrar em contato pelo WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default CTASection;