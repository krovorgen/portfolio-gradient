import React from 'react';

import { Paragraph, Title } from '@/components/index';

import styles from './style.module.scss';

const About = () => {
  return (
    <section className={styles['about']}>
      <Title tag={'h2'}>Обо мне</Title>
      <div className={`container ${styles['about__inner']}`}>
        <Paragraph size={'lg'}>Меня зовут Максим</Paragraph>
        <Paragraph>
          Организован, обладаю достаточными знаниями в JavaScript, его библиотеках и среде
          разработки. Имею опыт в создании проектов, представленных ниже, а также изучаю React.
          Люблю трудности в изучении, сразу появляется тяга не только понять материал, но и
          доходчиво донести другим эту же информацию.
        </Paragraph>
        <Paragraph>
          Есть команда, с которой занимаемся разработкой сайтов (промо, корпоративных,
          одностраничных для товаров и услуг) и их поддержкой.
        </Paragraph>
        <Paragraph>
          Предлагаем, как разработку с нуля, так и уже готовые шаблонные решения с последующим
          продвижением их в сети.
        </Paragraph>
        <ul className={styles['about__items']}>
          <li className={styles['about__item']}>web-разработка</li>
          <li className={styles['about__item']}>разработка ботов</li>
          <li className={styles['about__item']}>UI|ux дизайн</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
