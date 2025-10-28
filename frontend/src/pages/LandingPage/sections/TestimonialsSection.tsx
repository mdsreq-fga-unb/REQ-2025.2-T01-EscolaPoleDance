import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { testimonialsData } from "@/data/testimonialsData";
import Autoplay from "embla-carousel-autoplay";

type TestimonialCardProps = {
  name: string;
  text: string;
}

function TestimonialCard({ name, text }: TestimonialCardProps) {
  return (
    <div className="h-70 w-full bg-fuchsia-pink-50 rounded-2xl border border-fuchsia-pink-900 p-6 flex flex-col justify-center">
      <div className="text-center">
        {/* Quote icon */}
        <div className="w-12 h-12 bg-fuchsia-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-fuchsia-pink-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
        <p className="text-fuchsia-pink-900 text-sm font-medium font-['Montserrat'] leading-relaxed mb-6">
          "{text}"
        </p>
        <div className="border-t border-fuchsia-pink-200 pt-4">
          <p className="text-fuchsia-pink-900 text-base font-semibold font-['Montserrat']">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export function CarouselTestimonials() {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[
        Autoplay({
          delay: 2500,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full sm:hidden"
    >
      <CarouselContent>
        {testimonialsData.map((item, index) => (
          <CarouselItem key={index} className="basis-full">
            <TestimonialCard
              name={item.name}
              text={item.text}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default function TestimonialsSection() {
  return (
    <div className="bg-gradient-to-b from-fuchsia-pink-900 to-fuchsia-pink-950 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
      <div className="text-left mb-8 lg:mb-12">
        <h2 className="text-fuchsia-pink-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          O que nossas alunas dizem
        </h2>
        <p className="text-fuchsia-pink-50 text-base sm:text-lg md:text-xl font-medium leading-tight mt-2">
          Histórias reais de transformação e empoderamento
        </p>
      </div>

      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-8xl mx-auto">
        {testimonialsData.map((item) => (
          <TestimonialCard
            key={item.name}
            name={item.name}
            text={item.text}
          />
        ))}
      </div>

      <CarouselTestimonials />
    </div>
  );
}