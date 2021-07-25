import { PortfolioMockDataType } from '../types';

const portfolioMockData: PortfolioMockDataType = {
  title: 'Портфолио',
  navigationClass: {
    nextEl: 'portfolio__next',
    prevEl: 'portfolio__prev',
  },
  sliderContent: [
    { img: '/portfolio/textile.jpg', link: 'https://krovorgen.github.io/premium-textile/' },
    {
      img: '/portfolio/carsharing.jpg',
      link: 'https://krovorgen.github.io/car-sharing/',
    },
    {
      img: '/portfolio/mers.png',
      link: 'https://krovorgen.github.io/mercedes-layout/',
    },
    {
      img: '/portfolio/social-network.png',
      link: 'https://krovorgen.github.io/SocialNetwork-React/#/profile',
    },
    {
      img: '/portfolio/asus.jpg',
      link: 'https://krovorgen.github.io/asus-zenbook-layout/',
    },
    {
      img: '/portfolio/tivat.jpg',
      link: 'https://krovorgen.github.io/tivat-layout/',
    },
    {
      img: '/portfolio/glee.png',
      link: 'https://glee-krovorgen.vercel.app/',
    },
  ],
};

export default portfolioMockData;
