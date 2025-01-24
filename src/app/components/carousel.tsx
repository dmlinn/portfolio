'use client';

import { PortfolioItem } from "@/app/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

const DlCarousel = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await fetch('/api/portfolio-items');
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio items');
        }
        const data = await response.json();
        setPortfolioItems(data);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
      }
    };

    fetchPortfolioItems();
  }, []);

  const ConditionalLink: React.FC<{ children: ReactNode; href?: string }> = ({ children, href }) => {
    if (href) {
      return (
        <Link href={href}>
          {children}
        </Link>
      );
    }
    return children;
  };

  const ImageWithLoader = ({ src, alt, width, height, className }: { src: string, alt: string, width: number, height: number, className: string }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div className={className}>
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="animate-spin h-10 w-10" />
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoadingComplete={() => setImageLoaded(true)}
          className={`object-cover w-full h-full ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    );
  };

  return (
    <div className="flex">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 2,
        }}
      >
        <CarouselContent className="max-w-[20rem] md:max-w-lg lg:max-w-xl">
          {portfolioItems.map((item: PortfolioItem, index: number) => (
            <CarouselItem key={index} className="object-cover h-32 text-center basis-1/1 lg:basis-1/5">
              <ConditionalLink href={item.link}>
                <div className="relative w-32 h-32">
                  <ImageWithLoader
                    src={item.image}
                    alt={item.alt}
                    width={320}
                    height={180}
                    className="object-cover w-32 h-32"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold bg-black bg-opacity-50 opacity-100 hover:opacity-0 transition-opacity duration-300">
                    {item.title}
                  </div>
                </div>
              </ConditionalLink>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default DlCarousel;
