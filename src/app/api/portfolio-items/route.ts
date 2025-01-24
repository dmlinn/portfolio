import { PortfolioItem } from '@/app/types/types';
import { NextResponse } from 'next/server';

const portfolioItems: PortfolioItem[] = [
  {
    image: '/charter.png',
    alt: 'Charter/Spectrum',
    title: 'Charter/Spectrum',
    link: '/charter',
  },
  {
    image: '/ace.png',
    alt: 'Ace Scholarships',
    title: 'Ace Scholarships',
    link: '/ace',
  },
  {
    image: '/controlrooms.png',
    alt: 'ControlRooms',
    title: 'ControlRooms',
    link: '/controlrooms',
  },
  {
    image: '/ta.png',
    alt: 'Transamerica',
    title: 'Transamerica',
    link: '/transamerica',
  },
  {
    image: '/gci.png',
    alt: 'GCI',
    title: 'GCI',
    link: '/gci',
  },
  {
    image: '/miruni-thumb.png',
    alt: 'Miruni',
    title: 'Miruni',
    link: '/miruni',
  },
];

export async function GET() {
  return NextResponse.json(portfolioItems);
}
