import { useState, useEffect, useRef } from "react";

interface GenericCarouselProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  itemWidth?: number;
  itemHeight?: number;
  scrollSpeed?: number;
  className?: string;
}

export function GenericCarousel({ 
  items, 
  renderItem, 
  itemWidth = 340, 
  itemHeight = 220, 
  scrollSpeed = 0.3,
  className = ""
}: GenericCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Continuous auto-scroll functionality - only on mobile/tablet
  useEffect(() => {
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    if (isMobile) {
      const scroll = () => {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + scrollSpeed;
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
  }, [scrollSpeed]);

  // Touch/Mouse handlers
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
    
    // Apply the drag offset to scroll position 
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

  const handleUserInteraction = () => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      setIsUserInteracting(true);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      setTimeout(() => {
        setIsUserInteracting(false);
        // Restart continuous scroll
        const scroll = () => {
          setScrollPosition((prevPosition) => {
            const newPosition = prevPosition + scrollSpeed;
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

  const infiniteItems = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className={`w-full ${className}`}>
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-6 xl:gap-10 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="w-full">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden w-full relative overflow-hidden" style={{ height: `${itemHeight + 100}px` }}>
        <div 
          ref={carouselRef}
          className="flex select-none cursor-grab active:cursor-grabbing"
          style={{ 
            transform: `translateX(-${scrollPosition + dragOffset}px)`,
            width: `${infiniteItems.length * (itemWidth + 20)}px`,
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
          {infiniteItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 mr-3">
              <div style={{ width: `${itemWidth}px` }}>
                {renderItem(item, index)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
