import React, { FC } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Virtual } from 'swiper';
import Image from 'next/image';

import Next from '../../../assets/next.svg';
import Prev from '../../../assets/prev.svg';
import { Title, ModalWork } from '@/components/index';
import { PortfolioMockDataType } from '../../../types';

import styles from './style.module.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

interface ISliderProps {
  mockData: PortfolioMockDataType;
}

const Slider: FC<ISliderProps> = ({ mockData }) => {
  SwiperCore.use([Navigation]);
  SwiperCore.use([Virtual]);
  let swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 40,
    freeMode: true,
    navigation: {
      nextEl: `.${mockData.navigationClass.nextEl}`,
      prevEl: `.${mockData.navigationClass.prevEl}`,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1365: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  };

  return (
    <section className={styles['slider']}>
      <div className={`container `}>
        <div className={styles['slider__wrap']}>
          <Title addClass={styles['slider__title']} tag={'h3'}>
            {mockData.title}
          </Title>
          {mockData.sliderContent.length > 3 && (
            <ModalWork
              count={mockData.sliderContent.length}
              sliderMockData={mockData.sliderContent}
            />
          )}
        </div>
        <div className={styles['slider__container']}>
          <Prev
            className={`
              ${mockData.navigationClass.prevEl} 
              ${styles['slider__prev']}
            `}
          />
          <Swiper {...swiperSettings}>
            {mockData.sliderContent.map((item, index) => (
              <SwiperSlide key={index}>
                {item.type === 'local' ? (
                  <Link href={item.link}>
                    <a className={styles['slider__slide']}>
                      <Image
                        className={styles['slider__preview']}
                        src={item.img}
                        width={513}
                        height={300}
                        alt="Slider image"
                      />
                    </a>
                  </Link>
                ) : (
                  <a
                    className={styles['slider__slide']}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className={styles['slider__preview']}
                      src={item.img}
                      width={513}
                      height={300}
                      alt={'Slider image'}
                    />
                  </a>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <Next
            className={`
              ${mockData.navigationClass.nextEl} 
              ${styles['slider__next']}
            `}
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
