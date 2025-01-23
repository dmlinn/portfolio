import RefineGPSLocationComponent from "@/app/components/gps";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CarouselItem {
  image: string;
  alt: string;
  title: string;
  link?: string;
}

export default function DlCarousel() {
  const carouselItems: CarouselItem[] = [
    {
      image: "/charter.png",
      alt: "Charter/Spectrum",
      title: "Charter/Spectrum",
      link: "/charter"
    },
    {
      image: "/ace.png",
      alt: "Ace Scholarships",
      title: "Ace Scholarships",
      link: "/ace"
    },
    {
      image: "/controlrooms.png",
      alt: "ControlRooms",
      title: "ControlRooms",
      link: "/controlrooms"
    },
    {
      image: "/ta.png",
      alt: "Transamerica",
      title: "Transamerica",
      link: "/transamerica"
    },
    {
      image: "/gci.png",
      alt: "GCI",
      title: "GCI",
      link: "/gci"
    },
    {
      image: "/miruni-thumb.png",
      alt: "Miruni",
      title: "Miruni",
      link: "/miruni"
    },
  ];

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
          {carouselItems.map((item, index) => (
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
