interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="w-full h-full bg-purple-50 rounded-xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] border border-fuchsia-200 flex-shrink-0 relative flex flex-col items-center justify-center p-6">
      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
        <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <h3 className="text-purple-900 text-lg lg:text-xl font-bold font-['Montserrat'] leading-none mb-3 text-center">
        {title}
      </h3>
      
      <p className="text-purple-900 text-sm lg:text-base font-medium font-['Montserrat'] leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
}
