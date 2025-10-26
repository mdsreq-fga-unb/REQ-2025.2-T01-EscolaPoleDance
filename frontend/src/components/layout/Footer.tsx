import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-fuchsia-pink-950 py-6 mx-auto px-6 text-center space-y-2">
      <p className="text-fuchsia-pink-50 text-sm font-semibold">
        © Lady's Escola de Pole Dance – CNPJ: 28.876.997/0001-67.
      </p>
      <div className="text-fuchsia-pink-50 text-sm font-medium">
        <a
          className="underline cursor-pointer hover:text-fuchsia-pink-200 transition-colors"
          href="https://github.com/mdsreq-fga-unb/REQ-2025.2-T01-EscolaPoleDance"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por estudantes da Universidade de Brasília (UnB) - Campus
          Gama
        </a>
        <span> | </span>
        <Link
          className="underline cursor-pointer hover:text-fuchsia-pink-200 transition-colors"
          to="/privacy-policy"
        >
          Política de Privacidade
        </Link>
        <span> | </span>
        <Link
          className="underline cursor-pointer hover:text-fuchsia-pink-200 transition-colors"
          to="/terms-of-use"
        >
          Termos de Uso
        </Link>
      </div>
    </footer>
  );
}
