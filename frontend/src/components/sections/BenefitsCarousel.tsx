import { useState, useEffect, useRef } from "react";
import BenefitCard from "./BenefitCard.tsx";
import { 
  StrengthIcon, 
  FlexibilityIcon, 
  ConfidenceIcon, 
  FunIcon, 
  ExpressionIcon, 
  CommunityIcon 
} from "./BenefitIcons.tsx";

const benefits = [
  {
    icon: <StrengthIcon />,
    title: "Força",
    description: "Desenvolva músculos e resistência enquanto se diverte em cada aula."
  },
  {
    icon: <FlexibilityIcon />,
    title: "Flexibilidade",
    description: "Melhore sua mobilidade e descubra novas formas de movimentar o corpo."
  },
  {
    icon: <ConfidenceIcon />,
    title: "Confiança",
    description: "Sinta-se mais segura e orgulhosa a cada conquista na barra."
  },
  {
    icon: <FunIcon />,
    title: "Diversão",
    description: "Exercite-se de forma leve, criativa e sempre acompanhada de boa música."
  },
  {
    icon: <ExpressionIcon />,
    title: "Expressão",
    description: "Explore sua sensualidade e arte corporal, do seu jeito."
  },
  {
    icon: <CommunityIcon />,
    title: "Comunidade",
    description: "Faça parte de um grupo acolhedor que apoia e celebra suas vitórias."
  }
];

export default function BenefitsCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Continuous auto-scroll functionality - only on mobile/tablet / Funcionalidade de rolagem automática contínua - apenas em mobile/tablet
  useEffect(() => {
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    if (isMobile) {
      const scroll = () => {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + 0.3;
          return newPosition;
        });
        animationRef.current = requestAnimationFrame(scroll);
      };
      animationRef.current = requestAnimationFrame(scroll);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Touch/Mouse handlers / Manipuladores de toque/mouse
  const handleStart = (clientX: number) => {
    setTouchStart(clientX);
    setDragOffset(0);
    setIsDragging(true);
    handleUserInteraction();
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    
    const deltaX = touchStart - clientX;
    setDragOffset(deltaX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Apply the drag offset to scroll position / Aplicar o offset de arraste à posição de rolagem
    setScrollPosition((prevPosition) => prevPosition + dragOffset);
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    handleStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleMove(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Handle user interaction / Manipular interação do usuário
  const handleUserInteraction = () => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      setIsUserInteracting(true);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Resume auto-scroll after 3 seconds of no interaction / Retomar rolagem automática após 3 segundos sem interação
      setTimeout(() => {
        setIsUserInteracting(false);
        // Restart continuous scroll / Reiniciar rolagem contínua
        const scroll = () => {
          setScrollPosition((prevPosition) => {
            const newPosition = prevPosition + 0.3;
            return newPosition;
          });
          if (!isUserInteracting) {
            animationRef.current = requestAnimationFrame(scroll);
          }
        };
        animationRef.current = requestAnimationFrame(scroll);
      }, 3000);
    }
  };

  // Duplicate benefits many times for truly infinite scroll / Duplicar benefícios muitas vezes para rolagem verdadeiramente infinita
  const infiniteBenefits = [...benefits, ...benefits, ...benefits, ...benefits, ...benefits, ...benefits];

  return (
    <div className="w-full">
      {/* Desktop Layout - Grid / Layout Desktop - Grade */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-6 max-w-[1108px] mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="w-full h-[260px]">
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Layout - Infinite Carousel / Layout Mobile/Tablet - Carrossel Infinito */}
      <div className="lg:hidden w-full h-[340px] sm:h-[400px] md:h-[440px] relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex select-none cursor-grab active:cursor-grabbing"
          style={{ 
            transform: `translateX(-${scrollPosition + dragOffset}px)`,
            width: `${infiniteBenefits.length * 340}px`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {infiniteBenefits.map((benefit, index) => (
            <div key={index} className="flex-shrink-0 mr-5">
              <div className="w-[320px] h-[220px]">
                <BenefitCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
