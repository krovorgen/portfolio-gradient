import React, { FC } from 'react';

import { Paragraph, Title } from '@/components/index';
import Bots from './bots.svg';
import Ui from './ui.svg';
import Web from './web.svg';

import styles from './style.module.scss';

const About: FC = () => {
  const mockAboutData: JSX.Element[] = [
    <>
      Организован, обладаю достаточными знаниями в&nbsp;JavaScript, его библиотеках и&nbsp;среде
      разработки. Имею опыт в&nbsp;создании проектов, представленных ниже, а&nbsp;также изучаю
      React. Люблю трудности в изучении, сразу появляется тяга не&nbsp;только понять материал,
      но&nbsp;и&nbsp;доходчиво донести другим эту же&nbsp;информацию.
    </>,
    <>
      Есть команда, с&nbsp;которой занимаемся разработкой сайтов (промо, корпоративных,
      одностраничных для товаров и&nbsp;услуг) и&nbsp;их&nbsp;поддержкой.
    </>,
    <>
      Предлагаем, как разработку с&nbsp;нуля, так и&nbsp;уже готовые шаблонные решения
      с&nbsp;последующим продвижением их&nbsp;в&nbsp;сети.
    </>,
  ];

  const mockCardData: { img: JSX.Element; front: string; back: JSX.Element }[] = [
    {
      img: <Web className={styles['card__img']} />,
      front: 'Frontend-разработка',
      back: (
        <>
          Frontend-разработчик отвечает за&nbsp;внешний вид сайта или мобильного приложения:
          он&nbsp;верстает шаблоны, красиво оформляет текст и&nbsp;изображения, улучшает
          взаимодействие пользователя с&nbsp;интерфейсом.
        </>
      ),
    },
    {
      img: <Ui className={styles['card__img']} />,
      front: 'разработка ботов',
      back: (
        <>
          Чат-бот&nbsp;&mdash; это топовый инструмент, с&nbsp;помощью которого можно решить ряд
          основных вопросов компании. Эти вопросы касаются консультирования, поддержания контактов
          и&nbsp;увеличения продаж.
        </>
      ),
    },
    {
      img: <Bots className={styles['card__img']} />,
      front: 'Backend-разработка',
      back: (
        <>
          Backend-разработка&nbsp;&mdash; это набор аппаратно-программных средств, при помощи
          которых реализована логика работы сайта. Попросту говоря, это&nbsp;то, что скрыто
          от&nbsp;глаз пользователя и&nbsp;происходит вне его браузера и&nbsp;компьютера.
        </>
      ),
    },
  ];

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
