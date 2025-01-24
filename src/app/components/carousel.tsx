'use client';

import { PortfolioItem } from "@/app/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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

  const ConditionalLink: React.FC<{ children: ReactNode[]; href?: string }> = ({ children, href }) => {
    if (href) {
      return (
        <Link href={href}>
          {children}
        </Link>
      );
    }
    return children;
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
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={320}
                  height={180}
                  priority
                  className="object-cover w-32 h-32"
                />
                <div className="relative -top-40 w-32 h-44 pt-20 hover:opacity-0 animate" style={{backgroundColor: 'rgba(0,0,0,50%)'}}>
                  {item.title}
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
