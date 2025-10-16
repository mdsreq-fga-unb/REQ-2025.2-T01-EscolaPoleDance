import React from 'react';
import { Button } from './button';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  showMapButton?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, showMapButton = false }) => {
  return (
    <div className="w-full lg:w-94 lg:h-38 bg-fuchsia-pink-50 rounded-xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] border border-zinc-300 py-3 px-4 flex flex-col justify-between">
      <div>
        <h3 className="text-fuchsia-pink-900 text-lg font-bold font-['Montserrat'] mb-1.5 lg:mb-3.5">
          {title}
        </h3>
        <div className="text-fuchsia-pink-900 text-sm font-medium font-['Montserrat'] leading-normal">
          {children}
        </div>
      </div>
      {showMapButton && (
        <Button 
          className="w-full px-4 py-2 bg-fuchsia-pink-900 hover:bg-fuchsia-pink-800 text-white text-xs font-medium font-['Montserrat'] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] lg:hidden mt-3"
          asChild>
          <a 
            href="https://www.google.com/maps/place/Lady's+Escola+de+Pole+Dance/@-16.0002271,-48.0543797,17z/data=!3m1!4b1!4m6!3m5!1s0x935a2a9a143241c1:0x3f03e2d7890a4f0f!8m2!3d-16.0002271!4d-48.0522048!16s%2Fg%2F11c0q8q9q9"
            target="_blank"
            rel="noopener noreferrer">
            Abrir no Google Maps
          </a>
        </Button>
      )}
    </div>
  );
};

export default InfoCard;
