import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { benefitsData } from "@/data/benefitsData";
import Autoplay from "embla-carousel-autoplay";

type BenefitsCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function CarouselBenefits() {
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
        {benefitsData.map((item, index) => (
          <CarouselItem key={index} className="basis-full">
            <BenefitsCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export function BenefitsCard({ icon, title, description }: BenefitsCardProps) {
  return (
    <div className="h-60 bg-fuchsia-pink-50 rounded-xl border border-fuchsia-pink-200 flex-shrink-0 relative flex flex-col items-center justify-center p-10 gap-2">
      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-fuchsia-pink-100 aspect-square rounded-full flex items-center justify-center mb-2">
        <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-fuchsia-pink-900 text-lg lg:text-xl font-bold leading-none mb-2 text-center">
        {title}
      </h3>
      <p className="text-fuchsia-pink-900 text-sm lg:text-base font-medium leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="w-full min-h-[240px] sm:min-h-[540px] md:min-h-[640px] lg:min-h-[600px] bg-fuchsia-pink-100 flex flex-col items-center px-4 sm:px-8 md:px-20 lg:px-24 2xl:px-50 py-8 sm:py-12 md:py-20"
    >
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {benefitsData.map(({ icon, title, description }: BenefitsCardProps) => (
          <BenefitsCard
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>

      <CarouselBenefits />
    </section>
  );
}
