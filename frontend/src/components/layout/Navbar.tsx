import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import logo from "../../assets/img/icons/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-20 px-4 sm:px-8 md:px-12 lg:px-[90px] xl:px-20 py-2.5 bg-purple-950 border-b border-purple-800 font-[Montserrat] text-white flex justify-between items-center overflow-hidden relative">
      {/* Mobile Menu Button - Lado Esquerdo */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1" aria-label="Toggle menu">
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      <div className="flex items-center gap-0">
        <img 
          src={logo} alt="Logo Escola de Pole Dance" className="w-20 h-12 md:h-12"
        />
        <div className="flex flex-col">
          <span className="text-sm md:text-lg lg:text-xl font-light text-white leading-tight">ESCOLA DE</span>
          <span className="text-sm md:text-lg lg:text-xl font-semibold text-purple-500 leading-tight">POLE DANCE</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-2 xl:gap-4">
        <a href="#about" className="text-white text-xs xl:text-sm font-medium hover:text-purple-500 transition-colors">
          Sobre
        </a>
        <a href="#benefits" className="text-white text-xs xl:text-sm font-medium hover:text-purple-500 transition-colors">
          Pole Dance
        </a>
        <Link to="/404" className="text-white text-xs xl:text-sm font-medium hover:text-purple-500 transition-colors">
          Turmas e Horários
        </Link>
        <Link to="/404" className="text-white text-xs xl:text-sm font-medium hover:text-purple-500 transition-colors">
          Valores
        </Link>
        <Link to="/404" className="text-white text-xs xl:text-sm font-medium hover:text-purple-500 transition-colors">
          Regulamentos
        </Link>
        <a href="#faq" className="text-white text-xs xl:text-sm font-medium hover:text-purple-500 transition-colors">
          FAQ
        </a>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-1 xl:gap-2 ml-2 xl:ml-4">
          <Link to="/404">
            <Button
              variant="outline"
              size="sm"
              className="border-purple-50 text-purple-50 bg-transparent hover:bg-purple-800 text-xs xl:text-sm">
              Entrar
            </Button>
          </Link>
          <Link to="/404">
            <Button
              size="sm"
              className="bg-purple-50 text-purple-950 hover:bg-purple-600 hover:text-white text-xs xl:text-sm">
              Cadastrar
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-purple-950 border-b border-purple-800 lg:hidden z-50 shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            <a href="#about" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </a>
            <a href="#benefits" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Pole Dance
            </a>
            <Link to="/" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Turmas e Horários
            </Link>
            <Link to="/" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Valores
            </Link>
            <Link to="/" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Regulamentos
            </Link>
            <a href="#faq" className="text-white text-base font-medium hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-purple-800">
              <Link to="/404" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline" size="default" className="border-purple-50 text-purple-50 bg-transparent hover:bg-purple-800 w-full">
                  Entrar
                </Button>
              </Link>
              <Link to="/404" onClick={() => setIsMenuOpen(false)}>
                <Button
                  size="default" className="bg-purple-50 text-purple-950 hover:bg-purple-600 hover:text-white w-full">
                  Cadastrar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;