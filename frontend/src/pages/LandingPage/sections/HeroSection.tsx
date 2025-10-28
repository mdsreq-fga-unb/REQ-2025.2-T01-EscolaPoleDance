import { Button } from "@/components/ui/button";
import heroImage from "@/assets/img/hero/hero-img.png";

export default function HeroSection() {
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