import React from 'react';
import TestimonialCarousel from '../sections/TestimonialCarousel';

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-950 px-6 sm:px-12 lg:px-[90px] py-16">
      {/* Header */}
      <div className="text-left mb-12">
        <h2 className="text-purple-50 text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Montserrat'] leading-tight sm:leading-[55px]">
          O que nossas alunas dizem
        </h2>
        <p className="text-purple-50 text-lg sm:text-xl font-medium font-['Montserrat'] leading-tight sm:leading-[55px] mt-2">
          Histórias reais de transformação e empoderamento
        </p>
      </div>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />
    </div>
  );
};

export default TestimonialsSection;
