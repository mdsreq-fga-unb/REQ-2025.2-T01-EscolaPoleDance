import { useState } from "react";
import { Button } from "../ui/button";
import logo from "../../assets/img/icons/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-20 px-6 sm:px-12 md:px-24 py-2.5 bg-purple-950 border-b border-purple-800 font-[Montserrat] text-white flex justify-between items-center overflow-hidden relative">
      {/* Mobile Menu Button - Lado Esquerdo */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1" aria-label="Toggle menu">
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      <div className="flex items-center gap-1">
        <img 
          src={logo} alt="Logo Escola de Pole Dance" className="w-12 h-12 md:w-20 md:h-12"
        />
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-light text-white leading-tight">ESCOLA DE</span>
          <span className="text-lg md:text-xl font-semibold text-purple-500 leading-tight">POLE DANCE</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4">
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
        
        {/* Desktop Buttons */}
        <div className="flex items-center gap-2 ml-4">
          <Button 
            variant="outline" size="default" className="border-purple-50 text-purple-50 bg-transparent hover:bg-purple-800">
            Entrar
          </Button>
          <Button 
            size="default" className="bg-purple-50 text-purple-950 hover:bg-purple-600 hover:text-white">
            Cadastrar
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-purple-950 border-b border-purple-800 lg:hidden z-50 shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            <a href="#" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </a>
            <a href="#" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Pole Dance
            </a>
            <a href="#" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Turmas e Horários
            </a>
            <a href="#" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Valores
            </a>
            <a href="#" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Regulamentos
            </a>
            <a href="#" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            
            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-purple-800">
              <Button 
                variant="outline" size="default" className="border-purple-50 text-purple-50 bg-transparent hover:bg-purple-800"
                onClick={() => setIsMenuOpen(false)}>
                Entrar
              </Button>
              <Button 
                size="default" className="bg-purple-50 text-purple-950 hover:bg-purple-600 hover:text-white"
                onClick={() => setIsMenuOpen(false)}>
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;