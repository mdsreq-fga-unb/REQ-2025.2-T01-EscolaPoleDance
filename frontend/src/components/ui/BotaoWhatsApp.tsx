import { Button } from './button';
import { FaWhatsapp } from 'react-icons/fa';

type BotaoWhatsAppProps = {
  numero?: string;
  mensagem?: string;
  className?: string;
};

export default function BotaoWhatsApp({
  numero = '61993242268',
  mensagem = 'Olá! Gostaria de mais informações.',
  className = ''
}: BotaoWhatsAppProps) {
  const encodedMessage = encodeURIComponent(mensagem);
  const href = `https://wa.me/${numero}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className={`fixed bottom-4 right-4 z-50 ${className}`}
    >
      <Button
        className="bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg rounded-full p-0 w-14 h-14 flex items-center justify-center"
        size="lg"
      >
        <FaWhatsapp className="h-14 w-14" aria-hidden />
      </Button>
    </a>
  );
}
