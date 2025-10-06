import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-20 px-6 sm:px-12 md:px-24 py-2.5 bg-purple-950 border-b border-purple-800 font-[Montserrat] text-white flex justify-between items-center overflow-hidden">
      <div className="flex items-center gap-2">
        {/* Substituir o span por uma imagem */}
        <div className="flex-col md:flex-row">
          <span className="text-xl md:text-2xl font-light">ESCOLA DE</span>
          <span className="text-purple-500 text-xl md:text-2xl font-semibold"> POLE DANCE</span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <a href="#" className="text-white text-sm md:text-base font-medium hover:text-purple-500 transition-colors">
          Sobre
        </a>
        <a href="#" className="text-white text-sm md:text-base font-medium hover:text-purple-500 transition-colors">
          Pole Dance
        </a>
        <a href="#" className="text-white text-sm md:text-base font-medium hover:text-purple-500 transition-colors">
          Turmas e Horários
        </a>
        <a href="#" className="text-white text-sm md:text-base font-medium hover:text-purple-500 transition-colors">
          Valores
        </a>
        <a href="#" className="text-white text-sm md:text-base font-medium hover:text-purple-500 transition-colors">
          Regulamentos
        </a>
        <a href="#" className="text-white text-sm md:text-base font-medium hover:text-purple-500 transition-colors">
          FAQ
        </a>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-purple-950 rounded-lg border border-purple-50 text-purple-50 text-sm font-medium hover:bg-purple-800 transition-colors hidden md:block">
          Entrar
        </button>
        <button className="px-4 py-2 bg-purple-50 rounded-lg border border-purple-50 text-purple-950 text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors">
          Cadastrar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;