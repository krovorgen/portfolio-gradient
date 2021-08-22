import React from 'react';
import Image from 'next/image';

import { Title } from '@/components/index';

import styles from './style.module.scss';

type SkillsMockDataType = {
  icon: string;
  percent: string;
  title: string;
  text: string;
};

const Skills = () => {
  const skillsMockData: SkillsMockDataType[] = [
    {
      icon: '/images/skills/html.svg',
      percent: '95%',
      title: 'HTML5',
      text: 'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта',
    },
    {
      icon: '/images/skills/css.svg',
      percent: '85%',
      text: 'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!',
      title: 'CSS3',
    },
    {
      icon: '/images/skills/js.svg',
      percent: '85%',
      title: 'Java Script',
      text: 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.',
    },
    {
      icon: '/images/skills/nextjs.jpg',
      percent: '90%',
      title: 'Next.js',
      text: 'Next.js дает вам лучший опыт разработчика со всеми функциями, необходимыми для производства: гибридный статический и серверный рендеринг, поддержка TypeScript, интеллектуальное связывание, предварительная выборка маршрута и многое другое.',
    },
    {
      icon: '/images/skills/react.svg',
      percent: '95%',
      title: 'React',
      text: 'Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели.',
    },
    {
      icon: '/images/skills/nodejs.svg',
      percent: '90%',
      title: 'Node.js',
      text: 'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит.',
    },
    {
      icon: '/images/skills/python.svg',
      percent: '80%',
      title: 'Python',
      text: 'Этот язык программирования позволяет создавать Telegram-ботов и не только. Внутри программы на Python работает библиотека, которая отвечает за общение с сервером Telegram.',
    },
    {
      icon: '/images/skills/django.svg',
      percent: '80%',
      title: 'Django',
      text: 'Django считается лучшим веб-фреймворком, написанным на Python. Этот инструмент удобно использовать для разработки сайтов, работающих с базами данных.',
    },
  ];

  return (
    <section className={styles['skills']}>
      <Title addClass={styles['skills__title']} tag={'h3'}>
        Навыки
      </Title>
      <div className={`container `}>
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
