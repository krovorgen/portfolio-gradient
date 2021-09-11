import React from 'react';
import { Link } from 'react-scroll';

import { Button, Paragraph, Title } from '@/components/index';

import styles from './style.module.scss';

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <div className="container">
        <div className={styles['hero__inner']}>
          <Paragraph size={'lg'} addClass={styles['hero__pre-title']}>
            Меня зовут Максим Берёзка
          </Paragraph>
          <Title addClass={styles['hero__title']} tag={'h1'}>
            Я web-разработчик из города Минска
          </Title>
          <Link to={'cooperation'} smooth={true} duration={500} style={{ width: 'fit-content' }}>
            <Button size={'md'}>Связаться</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
