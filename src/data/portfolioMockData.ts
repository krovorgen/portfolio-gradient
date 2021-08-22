import { PortfolioMockDataType } from '../types';

const portfolioMockData: PortfolioMockDataType = {
  title: 'Портфолио',
  navigationClass: {
    nextEl: 'portfolio__next',
    prevEl: 'portfolio__prev',
  },
  sliderContent: [
    { img: '/images/portfolio/textile.jpg', link: 'https://krovorgen.github.io/premium-textile/' },
    {
      img: '/images/portfolio/carsharing.jpg',
      link: 'https://krovorgen.github.io/car-sharing/',
    },
    {
      img: '/images/portfolio/mers.png',
      link: 'https://krovorgen.github.io/mercedes-layout/',
    },
    {
      img: '/images/portfolio/social-network.png',
      link: 'https://krovorgen.github.io/SocialNetwork-React/#/profile',
    },
    {
      img: '/images/portfolio/asus.jpg',
      link: 'https://krovorgen.github.io/asus-zenbook-layout/',
    },
    {
      img: '/images/portfolio/tivat.jpg',
      link: 'https://krovorgen.github.io/tivat-layout/',
    },
    {
      img: '/images/portfolio/glee.png',
      link: 'https://glee-krovorgen.vercel.app/',
    },
  ],
};

export default portfolioMockData;
