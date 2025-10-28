import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/icons/lady-logo.png";
import { Button } from "../ui/button";

// Types
type NavItem = {
  label: string;
  to: string;
};

// Constants
const NAV_ITEMS: NavItem[] = [
  { label: "Sobre", to: "/about" },
  { label: "Pole Dance", to: "/pole-dance" },
  { label: "Turmas e Horários", to: "/classes" },
  { label: "Valores", to: "/pricing" },
  { label: "Regulamentos", to: "/policies" },
  { label: "FAQ", to: "/faq" },
];

const HamburgerButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 m-4"
    aria-label="Toggle menu"
    aria-expanded={isOpen}
  >
    <span
      className={`block w-6 h-0.5 bg-fuchsia-pink-50 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
    ></span>
    <span
      className={`block w-6 h-0.5 bg-fuchsia-pink-50 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
    ></span>
    <span
      className={`block w-6 h-0.5 bg-fuchsia-pink-50 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
    ></span>
  </button>
);

const LogoButton = ({ onClick }: { onClick: () => void }) => (
  <Link to="/" onClick={onClick} className="flex items-center">
    <img src={logo} alt="Logo Escola de Pole Dance" className="w-16 h-16 p-2" />
    <div className="flex flex-col">
      <span className="text-lg md:text-lg lg:text-xl font-light text-fuchsia-pink-50 leading-none">
        ESCOLA DE
      </span>
      <span className="text-lg md:text-lg lg:text-xl font-semibold text-fuchsia-pink-500 leading-none">
        POLE DANCE
      </span>
    </div>
  </Link>
);

const NavLink = ({
  item,
  onClick,
}: {
  item: NavItem;
  className: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      to={item.to}
      onClick={onClick}
      className="text-fuchsia-pink-50 font-medium hover:text-fuchsia-pink-200 transition-colors"
    >
      {item.label}
    </Link>
  );
};

const AuthButtons = ({
  isMobile,
  onClose,
}: {
  isMobile?: boolean;
  onClose?: () => void;
}) => {
  const buttonContainerClass = isMobile
    ? "flex flex-col gap-3 pt-4 border-t border-fuchsia-pink-800"
    : "flex items-center gap-1 xl:gap-2 ml-2 xl:ml-4";

  const buttonSizeClass = isMobile ? "w-full" : "";
  const textSizeClass = isMobile ? "" : "text-xs xl:text-sm";

  return (
    <div className={buttonContainerClass}>
      <Link to="/login" onClick={onClose}>
        <Button
          variant="outline"
          size="default"
          className={`border-fuchsia-pink-50 text-fuchsia-pink-50 bg-transparent hover:bg-fuchsia-pink-100 cursor-pointer ${textSizeClass} ${buttonSizeClass}`}
        >
          Entrar
        </Button>
      </Link>
      <Link to="/signup" onClick={onClose}>
        <Button
          size="default"
          className={`bg-fuchsia-pink-50 text-fuchsia-pink-950 hover:bg-fuchsia-pink-100 cursor-pointer ${textSizeClass} ${buttonSizeClass}`}
        >
          Cadastrar
        </Button>
      </Link>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = () => {
    if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
    else navigate("/");
  };

  return (
    // px-8 sm:px-8 md:px-12 lg:px-16 xl:px-[90px]
    // px-2 sm:px-8 lg:px-20 2xl:px-50
    <nav className="fixed top-0 w-full h-20 px-2 sm:px-8 lg:px-20 2xl:px-50 bg-fuchsia-pink-950 border-b border-fuchsia-pink-900 flex justify-start xl:justify-between items-center z-50">
      <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <LogoButton onClick={handleLogoClick} />

      {/* Desktop Navigation */}
      <div className="hidden xl:flex items-center gap-4 xl:gap-6">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            item={item}
            className="text-xs xl:text-sm"
          />
        ))}
        <AuthButtons />
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-fuchsia-pink-950 border-b border-fuchsia-pink-800 xl:hidden z-50 shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                className="text-base"
                onClick={closeMenu}
              />
            ))}
            <AuthButtons isMobile onClose={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
}
