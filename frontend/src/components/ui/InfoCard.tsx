import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
  return (
    <div className="w-96 h-36 bg-purple-50 rounded-xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] border border-zinc-300">
      <h3 className="text-purple-900 text-xl font-bold font-['Montserrat']">
        {title}
      </h3>
      <div className="text-purple-900 text-base font-medium font-['Montserrat'] leading-normal">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
