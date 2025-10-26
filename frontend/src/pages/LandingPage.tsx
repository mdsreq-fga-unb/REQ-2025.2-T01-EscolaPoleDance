import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BenefitsCarousel from "@/components/ui/BenefitsCarousel";
import { Button } from "@/components/ui/button";
import ButtonWhatsapp from "@/components/ui/ButtonWhatsapp";
import InfoCard from "@/components/ui/InfoCard";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import joemalAbdon from "../assets/img/about/joemalAbdon.jpg";
import heroImage from "../assets/img/hero/hero-img.png";
import Navbar from "../components/layout/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
      <FAQSection />
      <ButtonWhatsapp />
      <Footer />
    </>
  );
}

// ==================== SECTIONS ====================

export function HeroSection() {
  return (
    <section
      className="relative w-full mt-20 min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] bg-gradient-to-r from-fuchsia-pink-800 via-fuchsia-pink-900 to-fuchsia-pink-950 text-fuchsia-pink-50 
                 flex flex-col md:flex-row justify-between items-center z-0"
    >
      <div className="absolute md:left-1/2 md:top-0 md:w-1/2 h-full">
        <img
          src={heroImage}
          alt="Ginasta de Pole Dance"
          className="w-full h-full object-cover mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent,black)]"
        />
      </div>

      <div
        className="relative z-10 text-left md:text-left flex flex-col items-start md:items-start gap-8 
                      p-8 md:p-[90px] h-full justify-center"
      >
        <span
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                       leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                        font-medium text-fuchsia-pink-50 max-w-2xl md:max-w-3xl"
        >
          Ajudando <span className="font-bold">mulheres</span> a conquistar sua{" "}
          <span className="font-bold">melhor versão</span>
        </span>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
          <Button
            size="lg"
            className="bg-fuchsia-pink-50 text-fuchsia-pink-950 hover:bg-fuchsia-pink-100 cursor-pointer"
          >
            Marque uma aula experimental
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-fuchsia-pink-50 text-fuchsia-pink-50 bg-transparent hover:bg-fuchsia-pink-100 hover:text-fuchsia-pink-950 cursor-pointer"
          >
            Faça sua matrícula
          </Button>
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="w-full min-h-[440px] sm:min-h-[540px] md:min-h-[640px] lg:min-h-[600px] bg-fuchsia-pink-100 flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[90px] py-8 sm:py-12 md:py-20"
    >
      <div className="flex justify-center mb-12 sm:mb-8">
        <h2 className="text-fuchsia-pink-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] leading-tight text-center">
          Por que escolher o{" "}
          <span className="text-fuchsia-pink-600">Pole Dance</span>?
        </h2>
      </div>

      <div className="w-full max-w-[959px] text-center mb-8 sm:mb-10 md:mb-12 hidden md:block">
        <p className="text-fuchsia-pink-950 text-base font-medium font-['Montserrat'] leading-none">
          Mais do que uma dança, o pole é força, liberdade e autoconfiança.
          Descubra como cada aula pode transformar corpo e mente de forma
          divertida e inspiradora.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <BenefitsCarousel />
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-fuchsia-pink-50 via-fuchsia-pink-100 via-fuchsia-pink-150 to-fuchsia-pink-200 flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-[90px] xl:px-[90px] py-12 sm:py-16 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #faf5ff 0%, #faf5ff 55%, #e9d5ff 100%)",
      }}
    >
      <div className="lg:hidden mb-6 text-start">
        <h2 className="text-fuchsia-pink-900 text-[2.75rem] font-bold font-['Montserrat'] leading-[50px]">
          Prazer,
        </h2>
        <h2 className="text-fuchsia-pink-900 text-[2.75rem] font-medium font-['Montserrat'] leading-[50px]">
          Joelma Abdon.
        </h2>
      </div>
      <img
        src={joemalAbdon}
        alt="Joelma Abdon"
        className="w-[280px] h-[364px] sm:w-[320px] sm:h-[416px] md:w-[400px] md:h-[520px] lg:w-[450px] lg:h-[585px] xl:w-[500px] xl:h-[650px] rounded-3xl border border-fuchsia-pink-100 mx-auto lg:mx-0"
      />
      <div className="lg:ml-8 mt-6 lg:mt-0 max-w-2xl">
        <div className="hidden lg:block">
          <h2 className="text-fuchsia-pink-900 text-[2.75rem] font-bold font-['Montserrat'] leading-[50px]">
            Prazer,
          </h2>
          <h2 className="text-fuchsia-pink-900 text-[2.75rem] font-medium font-['Montserrat'] leading-[50px]">
            Joelma Abdon.
          </h2>
        </div>
        <div className="mt-6 space-y-10">
          <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
            Olá! Sou fundadora da{" "}
            <span className="font-semibold">Lady's Escola de Pole Dance</span>.
          </p>
          <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
            Sou profissional de Educação Física (
            <span className="text-fuchsia-pink-500 underline">
              nº -016176 G/DF
            </span>
            ) e instrutora de Pole Dance certificada há mais de 9 anos, e ao
            longo dessa trajetória ajudei dezenas de mulheres a descobrirem sua
            força, confiança e feminilidade através do pole dance.
          </p>
          <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
            <span className="text-fuchsia-950">
              Como professora, mãe e mulher, acredito na dança e na sua conexão
              com o corpo e a mente promovendo a saúde, autoestima e
              empoderamento. O pole, mais do que prática física, é uma paixão
              que tranborda arte, liberdade e transformação.
            </span>
          </p>
          <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
            Aqui na Lady's, cada aula é pensada com carinho para acolher,
            motivar e inspirar. Quero que você descubra o mesmo brilho que eu
            encontrei quando subi na barra pela primeira vez. ✨
          </p>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <div className="bg-gradient-to-b from-fuchsia-pink-900 to-fuchsia-pink-950 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
      {/* Header */}
      <div className="text-left mb-8 lg:mb-12">
        <h2 className="text-fuchsia-pink-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] leading-tight">
          O que nossas alunas dizem
        </h2>
        <p className="text-fuchsia-pink-50 text-base sm:text-lg md:text-xl font-medium font-['Montserrat'] leading-tight mt-2">
          Histórias reais de transformação e empoderamento
        </p>
      </div>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />
    </div>
  );
}

export function LocationSection() {
  return (
    <div className="bg-fuchsia-pink-100 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[90px] pt-8 lg:pt-12 pb-8 lg:pb-12">
      {/* Header */}
      <div className="mb-6 lg:mb-8 text-start mx-auto">
        <h2 className="text-fuchsia-pink-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] leading-tight">
          Visite nossa escola
        </h2>
        <p className="text-fuchsia-pink-900 text-sm sm:text-base font-medium font-['Montserrat'] leading-tight mt-4">
          Descubra um espaço dedicado ao empoderamento, força e expressão
          artística.
          <br />
          Entre em contato para agendar sua aula experimental.
        </p>
      </div>

      {/* Content Layout - Two Columns */}
      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] lg:items-start gap-6 lg:gap-8">
        {/* Left Column - Map */}
        <div className="relative w-full lg:w-auto hidden lg:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.255166080466!2d-48.05437969999999!3d-16.0002271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2a9a143241c1%3A0x3f03e2d7890a4f0f!2sLady&#39;s%20Escola%20de%20Pole%20Dance!5e0!3m2!1spt-BR!2sbr!4v1760469553587!5m2!1spt-BR!2sbr"
            width="680"
            height="495"
            className="w-full lg:w-[680px] max-w-full"
            style={{ border: "1px solid #D6B5DE", borderRadius: "10px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lady's Escola de Pole Dance Location"
          ></iframe>
          <div className="absolute bottom-4 left-4">
            <Button
              className="w-48 xl:w-64 px-3 xl:px-4 py-2 xl:py-3 bg-fuchsia-pink-900 hover:bg-fuchsia-pink-800 text-white text-xs xl:text-sm font-medium font-['Montserrat'] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"
              asChild
            >
              <a
                href="https://www.google.com/maps/place/Lady's+Escola+de+Pole+Dance/@-16.0002271,-48.0543797,17z/data=!3m1!4b1!4m6!3m5!1s0x935a2a9a143241c1:0x3f03e2d7890a4f0f!8m2!3d-16.0002271!4d-48.0522048!16s%2Fg%2F11c0q8q9q9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no Google Maps
              </a>
            </Button>
          </div>
        </div>

        {/* Right Column - Information Cards */}
        <div className="flex flex-col gap-4 lg:gap-5 w-full lg:w-auto lg:justify-start">
          <InfoCard title="Endereço" showMapButton={true}>
            Quadra 45 lote 08 loja B, St. Leste - Gama, Brasília - DF, 72440-450
          </InfoCard>

          <InfoCard title="Horário de contato">
            Segunda a Sexta: 8h - 18h
            <br />
            Sábado e Domingo: Fechado
          </InfoCard>

          <InfoCard title="Contato">
            <div className="space-y-1">
              <p>
                Tel:{" "}
                <span className="underline text-fuchsia-pink-500">
                  (61) 99324-2268
                </span>
              </p>
              <p>
                Instagram:{" "}
                <span className="underline text-fuchsia-pink-500">
                  @ladysescolapoledance
                </span>
              </p>
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
}

export function CTASection() {
  // Configurações do WhatsApp
  const whatsappConfig = {
    number: "61993242268",
    message:
      "Olá! Gostaria de saber mais sobre as aulas de pole dance da Lady's Escola.",
  };

  // Função para gerar URL do WhatsApp
  const generateWhatsAppUrl = () => {
    const baseUrl = `https://wa.me/${whatsappConfig.number}`;
    const message = encodeURIComponent(whatsappConfig.message);
    return `${baseUrl}?text=${message}`;
  };

  // Função para abrir WhatsApp
  const handleWhatsAppClick = () => {
    window.open(generateWhatsAppUrl(), "_blank", "noopener,noreferrer");
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
            variant="outline"
            size="lg"
            className="w-full lg:w-auto lg:min-w-[200px] bg-fuchsia-pink-50 text-fuchsia-pink-950 hover:bg-fuchsia-pink-600 hover:text-white"
          >
            Marque uma aula experimental
          </Button>
        </Link>
        <Link to="/404">
          <Button
            variant="outline"
            size="lg"
            className="w-full lg:w-auto lg:min-w-[200px] border-fuchsia-pink-50 text-fuchsia-pink-50 bg-transparent hover:bg-fuchsia-pink-800"
          >
            Faça sua matrícula
          </Button>
        </Link>
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="w-full lg:w-auto lg:min-w-[200px] bg-green-500 text-white hover:bg-green-600 hover:text-white"
        >
          <FaWhatsapp className="mr-0.5" />
          Entrar em contato pelo WhatsApp
        </Button>
      </div>
    </div>
  );
}

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQSection() {
  const faqItems: FAQItem[] = [
    {
      question: "Preciso ter experiência prévia para começar?",
      answer:
        "Não! Nossas aulas são adaptadas para todos os níveis, desde iniciantes até avançadas. Nossas instrutoras são especializadas em ensinar desde o básico.",
    },
    {
      question: "Qual a idade mínima para participar?",
      answer:
        "Aceitamos alunas a partir de 16 anos. Para menores de idade, é necessário autorização dos responsáveis.",
    },
    {
      question: "O que preciso levar para a primeira aula?",
      answer:
        "Para a primeira aula, venha com roupas confortáveis (shorts e top) e muita disposição! Temos poles disponíveis na escola.",
    },
    {
      question: "Como funciona o sistema de turmas?",
      answer:
        "Oferecemos turmas por níveis (iniciante, intermediário e avançado) com horários flexíveis durante a semana e fins de semana.",
    },
    {
      question: "Posso fazer aula experimental?",
      answer:
        "Sim! Oferecemos aula experimental paga para você conhecer nossa metodologia e se sentir à vontade antes de se matricular. Comece tudo marcando sua aula experimental no horário que se encaixa melhor para você!",
    },
    {
      question: "Existe limite de idade para praticar pole dance?",
      answer:
        "Não há limite de idade! Todas as mulheres são bem-vindas, desde que estejam liberadas para praticar atividade física. Cada faixa etária tem suas particularidades e benefícios. O importante é ter vontade de aprender e se divertir. Venha conhecer nossa metodologia adaptada para cada perfil!",
    },
  ];

  return (
    <section id="faq" className="bg-fuchsia-pink-100 px-6 lg:px-[90px] py-16">
      <div className="mb-12">
        <h2 className="text-fuchsia-pink-900 text-5xl font-semibold font-['Montserrat'] leading-[55px]">
          Dúvidas comuns
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 lg:items-start">
        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="w-full flex items-center justify-start pl-2 text-fuchsia-pink-900"
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
