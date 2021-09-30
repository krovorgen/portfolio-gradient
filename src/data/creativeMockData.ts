import { PortfolioMockDataType } from '../types';

export const creativeMockData: PortfolioMockDataType = {
  title: 'Креативы',
  navigationClass: {
    nextEl: 'creative__next',
    prevEl: 'creative__prev',
  },
  sliderContent: [
    {
      img: '/images/creative/gradient-card.jpg',
      link: '/creative/gradient-border-cards',
      type: 'local',
    },
    {
      img: '/images/creative/car-rides.png',
      link: '/creative/car-rides',
      type: 'local',
    },
    {
      img: '/images/creative/hexagon.png',
      link: '/creative/hexagon',
      type: 'local',
    },
    {
      img: '/images/creative/wavy-circles.png',
      link: '/creative/wavy-circles',
      type: 'local',
    },
  ],
};
