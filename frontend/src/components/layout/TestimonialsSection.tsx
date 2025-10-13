import React from 'react';
import TestimonialCard from '../sections/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-950">
      {/* Header */}
      <div className="text-left">
        <h2 className="text-purple-50 text-5xl font-semibold font-['Montserrat'] leading-[55px]">
          O que nossas alunas dizem
        </h2>
        <p className="text-purple-50 text-xl font-medium font-['Montserrat'] leading-[55px]">
          Histórias reais de transformação e empoderamento
        </p>
      </div>

      {/* Testimonials Area */}
      <div className="inline-flex justify-center items-baseline gap-20">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default TestimonialsSection;
