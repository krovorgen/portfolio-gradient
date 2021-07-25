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

const Creative = () => {
  SwiperCore.use([Navigation]);
  SwiperCore.use([Virtual]);
  let swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 40,
    freeMode: true,
    navigation: {
      nextEl: '.creative__next',
      prevEl: '.creative__prev',
    },
  };

  const sliderMockData: SliderMockDataType[] = [
    { img: '/creative/gradient-card.jpg', link: '/gradient-border-cards' },
  ];

  return (
    <section className={styles['creative']}>
      <Title addClass={styles['creative__title']} tag={'h3'}>
        Креативы
      </Title>
      <div className={`container `}>
        <ModalWork count={sliderMockData.length} sliderMockData={sliderMockData} />
        <div className={styles['creative__container']}>
          <Prev className={`creative__prev ${styles['creative__prev']}`} />
          <Swiper {...swiperSettings}>
            {sliderMockData.map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  className={styles['creative__slide']}
                  href={item.link}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  <Image
                    className={styles['creative__preview']}
                    src={item.img}
                    width={513}
                    height={300}
                    alt={'Portfolio image'}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <Next className={`creative__next ${styles['creative__next']}`} />
        </div>
      </div>
    </section>
  );
};

export default Creative;
