import React, { FC } from 'react';

import { Title } from '@/components/atoms/Title';
import { Paragraph } from '@/components/atoms/Paragraph';
import { aboutMockData } from 'data/aboutMockData';
import { mockCardInfoData } from 'data/mockCardInfoData';

import styles from './style.module.scss';

const About: FC = () => {
  return (
    <section className={styles['about']} id={'about'}>
      <Title addClass={styles['about__title']} tag={'h2'}>
        Обо мне
      </Title>
      <div className={`container ${styles['about__inner']}`}>
        <div className={styles['about__wrap']}>
          <Paragraph addClass={styles['about__pre-title']} size={'lg'}>
            Меня зовут Максим
          </Paragraph>
          {aboutMockData.map((text, index) => (
            <Paragraph key={index} addClass={styles['about__text']}>
              {text}
            </Paragraph>
          ))}
          <ul className={styles['about__items']}>
            {mockCardInfoData.map((item, index) => (
              <li key={index} className={styles['card']}>
                <div className={`${styles['card__wrapper']} ${styles['card__front']}`}>
                  {item.img}
                  <p className={styles['card__title']}>{item.front}</p>
                </div>
                <div className={`${styles['card__wrapper']} ${styles['card__back']}`}>
                  <Paragraph size={'sm'} addClass={styles['card__text']}>
                    {item.back}
                  </Paragraph>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
