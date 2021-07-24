import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Virtual } from 'swiper';
import Image from 'next/image';

import Next from './next.svg';
import Prev from './prev.svg';
import { Title } from '@/components/index';

import styles from './style.module.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

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

  const sliderMockData = [
    { img: '/textile.jpg', link: 'https://krovorgen.github.io/premium-textile/' },
    {
      img: '/social-network.png',
      link: 'https://krovorgen.github.io/SocialNetwork-React/#/profile',
    },
    {
      img: '/mers.png',
      link: 'https://krovorgen.github.io/mercedes-layout/',
    },
    {
      img: '/glee.png',
      link: 'https://glee-krovorgen.vercel.app/',
    },
  ];

  return (
    <section className={styles['portfolio']}>
      <Title addClass={styles['portfolio__title']} tag={'h3'}>
        Портфолио
      </Title>
      <div className={`container ${styles['portfolio__container']}`}>
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
    </section>
  );
};

export default Portfolio;
