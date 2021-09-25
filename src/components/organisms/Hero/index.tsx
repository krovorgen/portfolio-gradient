import React from 'react';
import { Link } from 'react-scroll';

import { Button, Paragraph } from '@/components/index';
import { Title } from '@/components/atoms/Title';

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
            Я&nbsp;web-разработчик из&nbsp;города Москвы
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
