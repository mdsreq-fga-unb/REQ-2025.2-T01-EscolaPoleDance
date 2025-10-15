import { GenericCarousel } from "../ui/GenericCarousel";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "../../data/testimonialsData";

export default function TestimonialCarousel() {
  return (
    <GenericCarousel
      items={testimonialsData}
      renderItem={(testimonial) => (
        <TestimonialCard 
          name={testimonial.name}
          text={testimonial.text}
        />
      )}
      itemWidth={340}
      itemHeight={434}
      scrollSpeed={0.3}
    />
  );
}
