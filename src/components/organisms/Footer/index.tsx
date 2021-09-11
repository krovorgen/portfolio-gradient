import React, { FC } from 'react';

import Vk from './vk.svg';
import Telegram from './telegram.svg';
import Inst from './inst.svg';

import styles from './style.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <ul className={styles['footer__container']}>
          <li className={`${styles['footer__element']} ${styles['footer__element--politics']}`}>
            <a className={styles['footer__logo']} href="#">
              MAKSIM BERIOSKA
            </a>
            <div className={styles['footer__about']}>
              <p>web-разработчик</p>
              <p>Максим Берёзка</p>
            </div>
            <a className={styles['footer__politics']} target="_blank" rel="noreferrer" href="#">
              Политика конфиденциальности
            </a>
          </li>
          <li className={styles['footer__element']}>
            <h3 className={styles['footer__title']}>Навигация</h3>
            <ul className="footer__items">
              <li className={styles['footer__item']}>
                <a className={styles['footer__link']} href="#">
                  Обо мне
                </a>
              </li>
              <li className={styles['footer__item']}>
                <a className={styles['footer__link']} href="#">
                  Портфолио
                </a>
              </li>
              <li className={styles['footer__item']}>
                <a className={styles['footer__link']} href="#">
                  Навыки
                </a>
              </li>
              <li className={styles['footer__item']}>
                <a className={styles['footer__link']} href="#">
                  Сотрудничество
                </a>
              </li>
            </ul>
          </li>
          <li className={`${styles['footer__element']} ${styles['footer__element--navigation']}`}>
            <h3 className={styles['footer__title']}>Контакты</h3>
            <ul className="footer__items">
              <li className={styles['footer__item']}>
                <a
                  className={styles['footer__link']}
                  target="_blank"
                  rel="noreferrer"
                  href="https://goo.gl/maps/HtY5PuaA38fjTdWx6"
                >
                  г. Минск, Беларусь
                </a>
              </li>
              <li className={styles['footer__item']}>
                <a className={styles['footer__link']} href="tel:+375296279908">
                  +375 29 627 99 08
                </a>
              </li>
              <li className={styles['footer__item']}>
                <a className={styles['footer__link']} href="mailto:krovorgen@gmail.com">
                  krovorgen@gmail.com
                </a>
              </li>
            </ul>
          </li>
          <li className={styles['footer__element']}>
            <h3 className={styles['footer__title']}>Связаться со мной</h3>
            <ul className={styles['footer__socials']}>
              <li className={styles['footer__social']}>
                <a
                  href="https://www.instagram.com/maksimberiozka/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Inst />
                </a>
              </li>
              <li className={styles['footer__social']}>
                <a href="https://vk.com/krovorgenn" target="_blank" rel="noreferrer">
                  <Vk />
                </a>
              </li>
              <li className={styles['footer__social']}>
                <a href="https://t.me/Maksimbiarozka" target="_blank" rel="noreferrer">
                  <Telegram />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
