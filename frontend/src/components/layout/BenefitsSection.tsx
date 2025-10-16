import BenefitsCarousel from "../sections/BenefitsCarousel";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="w-full min-h-[440px] sm:min-h-[540px] md:min-h-[640px] lg:min-h-[600px] bg-fuchsia-pink-100 flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16">
      <div className="flex justify-center mb-12 sm:mb-8">
        <h2 className="text-fuchsia-pink-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] leading-tight text-center">
          Por que escolher o <span className="text-fuchsia-pink-600">Pole Dance</span>?
        </h2>
      </div>
      
      <div className="w-full max-w-[959px] text-center mb-8 sm:mb-10 md:mb-12 hidden md:block">
        <p className="text-fuchsia-pink-950 text-base font-medium font-['Montserrat'] leading-none">
          Mais do que uma dança, o pole é força, liberdade e autoconfiança. Descubra como cada aula pode transformar corpo e mente de forma divertida e inspiradora.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <BenefitsCarousel />
      </div>
    </section>
  );
}
