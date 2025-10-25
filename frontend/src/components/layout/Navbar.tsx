import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import logo from "../../assets/img/icons/lady-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    if (pathname == "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <nav className="fixed top-0 w-full h-20 px-8 sm:px-8 md:px-12 lg:px-16 xl:px-[90px] bg-fuchsia-pink-950 border-b border-fuchsia-pink-900 text-fuchsia-pink-50 flex justify-start lg:justify-between items-center z-50">
      {/* Mobile Menu Button - Lado Esquerdo */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 m-4" aria-label="Toggle menu">
        <span className={`block w-6 h-0.5 bg-fuchsia-pink-50 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-fuchsia-pink-50 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-fuchsia-pink-50 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Logo Button */}
      <Link to="/" onClick={handleLogoClick} className="flex items-center">
        <img
          src={logo} alt="Logo Escola de Pole Dance" className="w-17 h-17 p-2"
        />
        <div className="flex flex-col">
          <span className="text-lg md:text-lg lg:text-xl font-light text-fuchsia-pink-50 leading-none">ESCOLA DE</span>
          <span className="text-lg md:text-lg lg:text-xl font-semibold text-fuchsia-pink-500 leading-none">POLE DANCE</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-2 xl:gap-4">
        <a href="#about" className="text-fuchsia-pink-50 text-xs xl:text-sm font-medium hover:text-fuchsia-pink-500 transition-colors">
          Sobre
        </a>
        <a href="#benefits" className="text-fuchsia-pink-50 text-xs xl:text-sm font-medium hover:text-fuchsia-pink-500 transition-colors">
          Pole Dance
        </a>
        <Link to="/404" className="text-fuchsia-pink-50 text-xs xl:text-sm font-medium hover:text-fuchsia-pink-500 transition-colors">
          Turmas e Horários
        </Link>
        <Link to="/404" className="text-fuchsia-pink-50 text-xs xl:text-sm font-medium hover:text-fuchsia-pink-500 transition-colors">
          Valores
        </Link>
        <Link to="/404" className="text-fuchsia-pink-50 text-xs xl:text-sm font-medium hover:text-fuchsia-pink-500 transition-colors">
          Regulamentos
        </Link>
        <a href="#faq" className="text-fuchsia-pink-50 text-xs xl:text-sm font-medium hover:text-fuchsia-pink-500 transition-colors">
          FAQ
        </a>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-1 xl:gap-2 ml-2 xl:ml-4">
          <Link to="/404">
            <Button
              variant="outline"
              size="default"
              className="border-fuchsia-pink-50 text-fuchsia-pink-50 bg-transparent hover:bg-fuchsia-pink-100 text-xs xl:text-sm cursor-pointer">
              Entrar
            </Button>
          </Link>
          <Link to="/404">
            <Button
              size="default"
              className="bg-fuchsia-pink-50 text-fuchsia-pink-950 hover:bg-fuchsia-pink-100 text-xs xl:text-sm cursor-pointer">
              Cadastrar
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-fuchsia-pink-950 border-b border-fuchsia-pink-800 lg:hidden z-50 shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            <a href="#about" className="text-white text-base font-medium hover:text-fuchsia-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </a>
            <a href="#benefits" className="text-white text-base font-medium hover:text-fuchsia-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Pole Dance
            </a>
            <Link to="/" className="text-white text-base font-medium hover:text-fuchsia-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Turmas e Horários
            </Link>
            <Link to="/" className="text-white text-base font-medium hover:text-fuchsia-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Valores
            </Link>
            <Link to="/" className="text-white text-base font-medium hover:text-fuchsia-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Regulamentos
            </Link>
            <a href="#faq" className="text-white text-base font-medium hover:text-fuchsia-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-fuchsia-pink-800">
              <Link to="/404" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline" size="default" className="border-fuchsia-pink-50 text-fuchsia-pink-50 bg-transparent hover:bg-fuchsia-pink-800 w-full">
                  Entrar
                </Button>
              </Link>
              <Link to="/404" onClick={() => setIsMenuOpen(false)}>
                <Button
                  size="default" className="bg-fuchsia-pink-50 text-fuchsia-pink-950 hover:bg-fuchsia-pink-600 hover:text-white w-full">
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
