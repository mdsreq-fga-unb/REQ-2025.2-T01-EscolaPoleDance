interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="w-full h-full bg-fuchsia-pink-50 rounded-xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] border border-fuchsia-200 flex-shrink-0 relative flex flex-col items-center justify-center p-2">
      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-fuchsia-pink-100 rounded-full flex items-center justify-center mb-2">
        <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <h3 className="text-fuchsia-pink-900 text-lg lg:text-xl font-bold font-['Montserrat'] leading-none mb-2 text-center">
        {title}
      </h3>
      
      <p className="text-fuchsia-pink-900 text-sm lg:text-base font-medium font-['Montserrat'] leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
}
