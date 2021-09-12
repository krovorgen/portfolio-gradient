import React from 'react';
import Web from '../assets/web.svg';
import Ui from '../assets/ui.svg';
import Bots from '../assets/bots.svg';
import styles from '@/components/organisms/About/style.module.scss';

export const mockCardInfoData: { img: JSX.Element; front: string; back: JSX.Element }[] = [
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
        Backend-разработка&nbsp;&mdash; это набор аппаратно-программных средств, при помощи которых
        реализована логика работы сайта. Попросту говоря, это&nbsp;то, что скрыто от&nbsp;глаз
        пользователя и&nbsp;происходит вне его браузера и&nbsp;компьютера.
      </>
    ),
  },
];
