import React from 'react';
import TestimonialCarousel from '../sections/TestimonialCarousel';

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-950 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
      {/* Header */}
      <div className="text-left mb-8 lg:mb-12">
        <h2 className="text-purple-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] leading-tight">
          O que nossas alunas dizem
        </h2>
        <p className="text-purple-50 text-base sm:text-lg md:text-xl font-medium font-['Montserrat'] leading-tight mt-2">
          Histórias reais de transformação e empoderamento
        </p>
      </div>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />
    </div>
  );
};

export default TestimonialsSection;
