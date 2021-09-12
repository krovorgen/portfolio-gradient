import React from 'react';
import Image from 'next/image';

import { Title } from '@/components/index';

import styles from './style.module.scss';

type SkillsMockDataType = {
  icon: string;
  percent: string;
  title: string;
  text: JSX.Element;
};

const Skills = () => {
  const skillsMockData: SkillsMockDataType[] = [
    {
      icon: '/images/skills/html.svg',
      percent: '95%',
      title: 'HTML5',
      text: (
        <>
          Именно он&nbsp;создает каркас вашего сайта или приложения, а&nbsp;пятая версия позволит
          мне создавать более SEO-оптимизированную структуру вашего продукта
        </>
      ),
    },
    {
      icon: '/images/skills/css.svg',
      percent: '85%',
      title: 'CSS3',
      text: (
        <>
          Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или
          приложения. Все ограничивается только вашей фантазией!
        </>
      ),
    },
    {
      icon: '/images/skills/js.svg',
      percent: '85%',
      title: 'Java Script',
      text: (
        <>
          Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки,
          вкладки, получение данных от&nbsp;сервера и&nbsp;многое другое.
        </>
      ),
    },
    {
      icon: '/images/skills/nextjs.jpg',
      percent: '90%',
      title: 'Next.js',
      text: (
        <>
          Next.js дает вам лучший опыт разработчика со&nbsp;всеми функциями, необходимыми для
          производства: гибридный статический и&nbsp;серверный рендеринг, поддержка TypeScript,
          интеллектуальное связывание, предварительная выборка маршрута и&nbsp;многое другое.
        </>
      ),
    },
    {
      icon: '/images/skills/react.svg',
      percent: '95%',
      title: 'React',
      text: (
        <>
          Эта библиотека позволяет создавать web-приложения. Мы&nbsp;можем создать максимально
          интерактивный продукт именно под ваши цели.
        </>
      ),
    },
    {
      icon: '/images/skills/nodejs.svg',
      percent: '90%',
      title: 'Node.js',
      text: (
        <>
          Эта платформа позволяет создавать бэкенд для вашего продукта&nbsp;&mdash;
          &laquo;мозги&raquo;, которые будут выполнять действия, которые пользователь не&nbsp;видит.
        </>
      ),
    },
    {
      icon: '/images/skills/python.svg',
      percent: '80%',
      title: 'Python',
      text: (
        <>
          Этот язык программирования позволяет создавать Telegram-ботов и&nbsp;не&nbsp;только.
          Внутри программы на&nbsp;Python работает библиотека, которая отвечает за&nbsp;общение
          с&nbsp;сервером Telegram.
        </>
      ),
    },
    {
      icon: '/images/skills/django.svg',
      percent: '80%',
      title: 'Django',
      text: (
        <>
          Django считается лучшим веб-фреймворком, написанным на&nbsp;Python. Этот инструмент удобно
          использовать для разработки сайтов, работающих с&nbsp;базами данных.
        </>
      ),
    },
  ];

  return (
    <section className={styles['skills']} id={'skills'}>
      <div className={`container `}>
        <Title addClass={styles['skills__title']} tag={'h3'}>
          Навыки
        </Title>
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

export default Skills;
