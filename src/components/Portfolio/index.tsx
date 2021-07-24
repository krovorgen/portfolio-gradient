import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Virtual } from 'swiper';

import Next from './next.svg';
import Prev from './prev.svg';

import styles from './style.module.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { Title } from '@/components/index';

const Portfolio = () => {
  SwiperCore.use([Navigation]);
  SwiperCore.use([Virtual]);
  let swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 40,
    virtual: true,
    freeMode: true,
    navigation: {
      nextEl: '.portfolio__next',
      prevEl: '.portfolio__prev',
    },
  };

  const sliderMockData = [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
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
              <div className={styles['portfolio__slide']}>{item}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Next className={`portfolio__next ${styles['portfolio__next']}`} />
      </div>
    </section>
  );
};

export default Portfolio;
