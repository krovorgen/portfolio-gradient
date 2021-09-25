import React from 'react';
import Image from 'next/image';

import { skillsMockData } from '../../../data/skillsMockData';
import { Title } from '@/components/atoms/Title';

import styles from './style.module.scss';

export const Skills = () => {
  return (
    <section className={styles['skills']} id={'skills'}>
      <div className={`container `}>
        <Title addClass={styles['skills__title']} tag={'h3'}>
          Навыки
        </Title>
        <div className={styles['skills__codewars']}>
          <Image
            src={'https://www.codewars.com/users/krovorgen/badges/large'}
            width={'400'}
            height={'40'}
            alt={'codewars'}
          />
        </div>
        <ul className={styles['skills__items']}>
          {skillsMockData.map((item, index) => (
            <li className={styles['skills__item']} key={index}>
              <div className={styles['skills__left']}>
                <Image
                  className={styles['skills__icon']}
                  src={item.icon}
                  width={100}
                  height={100}
                  alt={item.title}
                />
                <div className={styles['skills__description']}>
                  <p className={styles['skills__pre-title']}>{item.title}</p>
                  <p className={styles['skills__text']}>{item.text}</p>
                </div>
              </div>
              <div className={styles['skills__right']}>
                <span className={styles['skills__percent']}>{item.percent}</span>
                <div className={styles['skills__line']}>
                  <span className={styles['skills__filled']} style={{ width: item.percent }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
