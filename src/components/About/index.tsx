import React, { FC } from 'react';
import Image from 'next/image';

import { Paragraph, Title } from '@/components/index';
import Bots from './bots.svg';
import Ui from './ui.svg';
import Web from './web.svg';

import styles from './style.module.scss';

const About: FC = () => {
  const mockAboutData: string[] = [
    'Организован, обладаю достаточными знаниями в JavaScript, его библиотеках и среде разработки. Имею опыт в создании проектов, представленных ниже, а также изучаю React. Люблю трудности в изучении, сразу появляется тяга не только понять материал, но и доходчиво донести другим эту же информацию.',
    'Есть команда, с которой занимаемся разработкой сайтов (промо, корпоративных, одностраничных для товаров и услуг) и их поддержкой. ',
    'Предлагаем, как разработку с нуля, так и уже готовые шаблонные решения с последующим продвижением их в сети. ',
  ];

  const mockCardData: { img: JSX.Element; front: string; back: string }[] = [
    {
      img: <Web className={styles['card__img']} />,
      front: 'web-разработка',
      back: 'Воплощение готовых дизайнерских макетов в жизнь, понимание самой процедуры создания сайта требует получение теоретических и практических знаний в области адаптивной и интерактивной верстки. ',
    },
    {
      img: <Bots className={styles['card__img']} />,
      front: 'разработка ботов',
      back: 'Чат-бот – это топовый инструмент, с помощью которого можно решить ряд основных вопросов компании. Эти вопросы касаются консультирования, поддержания контактов и увеличения продаж.',
    },
    {
      img: <Ui className={styles['card__img']} />,
      front: 'UI|ux дизайн',
      back: 'Проектирование любых пользовательских интерфейсов в которых удобство использования так же важно как и внешний вид.',
    },
  ];

  return (
    <section className={styles['about']}>
      <Title addClass={styles['about__title']} tag={'h2'}>
        Обо мне
      </Title>
      <div className={`container ${styles['about__inner']}`}>
        <div className={styles['about__wrap']}>
          <Paragraph addClass={styles['about__pre-title']} size={'lg'}>
            Меня зовут Максим
          </Paragraph>
          {mockAboutData.map((text, index) => (
            <Paragraph key={index} addClass={styles['about__text']}>
              {text}
            </Paragraph>
          ))}
          <ul className={styles['about__items']}>
            {mockCardData.map((item, index) => (
              <li key={index} className={styles['card']}>
                <div className={`${styles['card__wrapper']} ${styles['card__front']}`}>
                  {item.img}
                  <p className={styles['card__title']}>{item.front}</p>
                </div>
                <div className={`${styles['card__wrapper']} ${styles['card__back']}`}>
                  <Paragraph size={'sm'}>{item.back}</Paragraph>
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
