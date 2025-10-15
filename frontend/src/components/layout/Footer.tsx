import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-950 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-2">
          <p className="text-white text-sm font-semibold font-['Montserrat'] leading-7">
            © Lady's Escola de Pole Dance – CNPJ: 12.345.678/0001-90.
          </p>
          <p className="text-white text-sm font-medium font-['Montserrat'] leading-7">
            <span className="underline cursor-pointer transition-colors">
              Desenvolvido por estudantes da Universidade de Brasília (UnB) - Campus Gama
            </span>
            <span> | </span>
            <span className="underline cursor-pointer hover:text-purple-200 transition-colors">
              Política de Privacidade
            </span>
            <span> | </span>
            <span className="underline cursor-pointer hover:text-purple-200 transition-colors">
              Termos de Uso
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;