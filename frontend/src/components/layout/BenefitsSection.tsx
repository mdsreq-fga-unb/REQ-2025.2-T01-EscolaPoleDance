import BenefitsCarousel from "../sections/BenefitsCarousel";

export default function BenefitsSection() {
  return (
    <section className="w-full min-h-[440px] sm:min-h-[540px] md:min-h-[640px] lg:min-h-[821px] bg-purple-100 flex flex-col items-center py-8 sm:py-12 md:py-16 px-4">
      {/* Title / Título */}
      <div className="flex justify-center mb-12 sm:mb-8 px-4">
        <h2 className="text-purple-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] leading-tight text-center">
          Por que escolher o <span className="text-purple-600">Pole Dance</span>?
        </h2>
      </div>
      
      {/* Subtitle - Hidden on mobile / Subtítulo - Oculto em mobile */}
      <div className="w-full max-w-[959px] text-center mb-8 sm:mb-10 md:mb-12 hidden md:block">
        <p className="text-purple-950 text-base font-medium font-['Montserrat'] leading-none">
          Mais do que uma dança, o pole é força, liberdade e autoconfiança. Descubra como cada aula pode transformar corpo e mente de forma divertida e inspiradora.
        </p>
      </div>

      {/* Benefits Carousel / Carrossel de Benefícios */}
      <div className="w-full flex justify-center">
        <BenefitsCarousel />
      </div>
    </section>
  );
}
