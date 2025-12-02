import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import { photoDataTop, photoDataBottom } from "@/data/photoData";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from 'embla-carousel-auto-scroll'

type PhotoCardProps = {
    img: string | React.ReactNode; // aceita caminho (string) ou um elemento React
    alt?: string;
};

export function CarouselGaleria() {
    return (
        <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
                Autoplay({
                    delay: 2500,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                }),
                AutoScroll({
                    stopOnInteraction: false,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent>
                {photoDataTop.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4">
                        <PhotoCard img={item.img} alt={item.alt} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
export function CarouselGaleriaReverse() {
    return (
        <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
                Autoplay({
                    delay: 2500,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                }),
                AutoScroll({
                    direction: "backward",
                    stopOnInteraction: false,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent>
                {photoDataBottom.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4">
                        <PhotoCard img={item.img} alt={item.alt} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export function PhotoCard({ img, alt }: PhotoCardProps) {
    const isString = typeof img === 'string';

    return (
        <div className="w-full flex-shrink-0 rounded-xl relative overflow-hidden bg-transparent flex br-4">
            {isString ? (
                // imagem vindo como caminho/URL — manter proporção e caber no card
                // usamos object-contain e limites de altura responsivos para reduzir o tamanho
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={img as string}
                    alt={alt ?? ''}
                    className="block max-h-[180px] sm:max-h-[240px] md:max-h-[360px] lg:max-h-[480px] mx-auto object-contain"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center p-4">{img}</div>
            )}
        </div>
    );
}

export default function GaleriaSection() {
    return (
        <section
            id="benefits"
            className="w-full min-h-[240px] sm:min-h-[540px] md:min-h-[640px] lg:min-h-[600px] bg-fuchsia-pink-900 flex flex-col items-center py-8 sm:py-12 md:py-20"
        >
            {/* Carousel em tela inteira (aparece em todas as larguras). Cada slide preenche a altura da seção. */}
            <div className="w-full h-full m-3">
                <CarouselGaleria />
            </div>
            <div className="w-full h-full m-3">
                <CarouselGaleriaReverse />
            </div>
        </section>
    );
}
