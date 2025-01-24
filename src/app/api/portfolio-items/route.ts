import { PortfolioItem } from '@/app/types/types';
import { NextResponse } from 'next/server';

const portfolioItems: PortfolioItem[] = [
  {
    image: '/charter.png',
    alt: 'Charter/Spectrum',
    title: 'Charter/Spectrum',
    link: '/pages/charter',
  },
  {
    image: '/ace.png',
    alt: 'Ace Scholarships',
    title: 'Ace Scholarships',
    link: '/pages/ace',
  },
  {
    image: '/controlrooms.png',
    alt: 'ControlRooms',
    title: 'ControlRooms',
    link: '/pages/controlrooms',
  },
  {
    image: '/ta.png',
    alt: 'Transamerica',
    title: 'Transamerica',
    link: '/pages/transamerica',
  },
  {
    image: '/gci.png',
    alt: 'GCI',
    title: 'GCI',
    link: '/pages/gci',
  },
  {
    image: '/miruni-thumb.png',
    alt: 'Miruni',
    title: 'Miruni',
    link: '/pages/miruni',
  },
];

export async function GET() {
  return NextResponse.json(portfolioItems);
}
