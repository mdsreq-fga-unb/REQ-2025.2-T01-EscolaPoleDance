import heroImage from "../../assets/img/hero/hero-img.png";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative w-full mt-20 min-h-[calc(100vh-5rem)] bg-gradient-to-r from-fuchsia-pink-700 via-fuchsia-pink-900 to-fuchsia-pink-950 font-[Montserrat] text-fuchsia-pink-50 
                 flex flex-col md:flex-row justify-between items-center overflow-hidden"
    >
      <div className="absolute inset-0 md:left-1/2 md:top-0 md:w-1/2 h-full">
        <img
          src={heroImage}
          alt="Ginasta de Pole Dance"
          className="w-full h-full object-cover mix-blend-luminosity bg-gradient-to-r from-fuchsia-pink-950 to-transparent opacity-55"
        />
      </div>

      <div className="relative z-10 text-left md:text-left flex flex-col items-start md:items-start gap-8 
                      p-8 md:p-[90px] h-full justify-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                       leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                        font-medium text-fuchsia-pink-50 drop-shadow-lg max-w-2xl md:max-w-3xl">
          Ajudando <span className="font-bold">mulheres</span> a conquistar sua <span className="font-bold">melhor versão</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
          <Button
            size="lg"
            className="bg-white text-fuchsia-pink-950 hover:bg-gray-100"
          >
            Marque uma aula experimental
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white bg-transparent hover:bg-white hover:text-fuchsia-pink-950"
          >
            Faça sua matrícula
          </Button>
        </div>
      </div>
    </section>
  );
}