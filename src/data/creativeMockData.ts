import { PortfolioMockDataType } from '../types';

const creativeMockData: PortfolioMockDataType = {
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
  ],
};

export default creativeMockData;
