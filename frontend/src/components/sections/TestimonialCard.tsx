import React from 'react';

interface TestimonialCardProps {
  name: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text }) => {
  return (
    <div className="w-82 max-w-sm h-[434px] bg-purple-50 rounded-2xl border border-purple-900 flex-shrink-0 p-6 flex flex-col justify-center">
      <div className="text-center">
        {/* Quote icon */}
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
        
        {/* Testimonial text */}
        <p className="text-purple-900 text-sm font-medium font-['Montserrat'] leading-relaxed mb-6">
          "{text}"
        </p>
        
        {/* Author name */}
        <div className="border-t border-purple-200 pt-4">
          <p className="text-purple-900 text-base font-semibold font-['Montserrat']">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
