import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Virtual } from 'swiper';
import Image from 'next/image';

import Next from '../../../assets/next.svg';
import Prev from '../../../assets/prev.svg';
import { Title, ModalWork } from '@/components/index';

import styles from './style.module.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

export type SliderMockDataType = {
  img: string;
  link: string;
};

const Portfolio = () => {
  SwiperCore.use([Navigation]);
  SwiperCore.use([Virtual]);
  let swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 40,
    freeMode: true,
    navigation: {
      nextEl: '.portfolio__next',
      prevEl: '.portfolio__prev',
    },
  };

  const sliderMockData: SliderMockDataType[] = [
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
  ];

  return (
    <section className={styles['portfolio']}>
      <Title addClass={styles['portfolio__title']} tag={'h3'}>
        Портфолио
      </Title>
      <div className={`container `}>
        <ModalWork count={sliderMockData.length} sliderMockData={sliderMockData} />
        <div className={styles['portfolio__container']}>
          <Prev className={`portfolio__prev ${styles['portfolio__prev']}`} />
          <Swiper {...swiperSettings}>
            {sliderMockData.map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  className={styles['portfolio__slide']}
                  href={item.link}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  <Image
                    className={styles['portfolio__preview']}
                    src={item.img}
                    width={513}
                    height={300}
                    alt={'Portfolio image'}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <Next className={`portfolio__next ${styles['portfolio__next']}`} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
