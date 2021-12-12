import React from 'react';
import { Link } from 'react-scroll';

import { Title } from '@/components/atoms/Title';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Button } from '@/components/atoms/Button';

import styles from './style.module.scss';

export const Hero = () => {
  return (
    <section className={styles['hero']}>
      <div className="container">
        <div className={styles['hero__inner']}>
          <Paragraph size={'lg'} addClass={styles['hero__pre-title']}>
            {"Hello! I'm Maksim Berezka"}
          </Paragraph>
          <Title addClass={styles['hero__title']} tag={'h1'}>
            {"I'M WEB DEVELOPER FROM MOSCOW"}
          </Title>
          <Link to={'cooperation'} smooth={true} duration={500} style={{ width: 'fit-content' }}>
            <Button size={'md'}>Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
