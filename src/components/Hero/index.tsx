import React from 'react';
import { Button, Paragraph, Title } from '@/components/index';

import styles from './style.module.scss';

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <div className="container">
        <div className={styles['hero__inner']}>
          <Paragraph addClass={styles['hero__pre-title']}>Меня зовут Максим Берёзка</Paragraph>
          <Title addClass={styles['hero__title']} tag={'h1'}>
            Я web-разработчик из города Минска
          </Title>
          <Button size={'md'}>Связаться</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
