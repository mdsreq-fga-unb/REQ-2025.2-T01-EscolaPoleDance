import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fuchsia-pink-950 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-2">
          <p className="text-white text-sm font-semibold font-['Montserrat'] leading-7">
            © Lady's Escola de Pole Dance – CNPJ: 12.345.678/0001-90.
          </p>
          <p className="text-white text-sm font-medium font-['Montserrat'] leading-7">
            <a
              href="https://github.com/mdsreq-fga-unb/REQ-2025.2-T01-EscolaPoleDance"
              target="_blank"
              rel="noopener noreferrer"
              className="underline cursor-pointer hover:text-pink-200 transition-colors"
            >
              Desenvolvido por estudantes da Universidade de Brasília (UnB) - Campus Gama
            </a>
            <span> | </span>
            <a
              href="/politica-de-privacidade"
              className="underline cursor-pointer hover:text-pink-200 transition-colors"
            >
              Política de Privacidade
            </a>
            <span> | </span>
            <a
              href="/termos-de-uso"
              className="underline cursor-pointer hover:text-pink-200 transition-colors"
            >
              Termos de Uso
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;