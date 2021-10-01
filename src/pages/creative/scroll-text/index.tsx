import React from 'react';

import { ReturnBack } from '@/components/atoms/ReturnBack';

import styles from './style.module.scss';

const ScrollText = () => {
  return (
    <>
      <section className={styles['scroll-text']}>
        <article className={styles['scroll-text__box']}>
          <h2 className={styles['scroll-text__title']}>
            Портфолио Берёзки Максим Сергеевича, Frontend разработчика из города Москвы
          </h2>
        </article>
        <article className={styles['scroll-text__box']}>
          <h2 className={styles['scroll-text__title']}>
            Портфолио Берёзки Максим Сергеевича, Frontend разработчика из города Москвы
          </h2>
        </article>
      </section>
      <ReturnBack />
    </>
  );
};

export default ScrollText;
