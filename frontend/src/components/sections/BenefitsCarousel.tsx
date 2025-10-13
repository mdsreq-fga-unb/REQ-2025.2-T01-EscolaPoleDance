import { GenericCarousel } from "../ui/GenericCarousel";
import BenefitCard from "./BenefitCard";
import { benefitsData } from "../../data/benefitsData";

export default function BenefitsCarousel() {
  return (
    <GenericCarousel
      items={benefitsData}
      renderItem={(benefit) => (
        <div className="w-full h-[260px]">
          <BenefitCard
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        </div>
      )}
      itemWidth={320}
      itemHeight={220}
      scrollSpeed={0.3}
    />
  );
}
