import React, { FC } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Link from "next/link";

import Vk from '../../../assets/vk.svg';
import Telegram from '../../../assets/telegram.svg';
import Inst from '../../../assets/inst.svg';
import { navLinkData } from '../../../data/navLinkData';

import styles from './style.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <ul className={styles['footer__container']}>
          <li className={`${styles['footer__element']} ${styles['footer__element--politics']}`}>
            <a className={styles['footer__logo']} href="#">
              MAKSIM BIAROZKA
            </a>
            <div className={styles['footer__about']}>
              <p>web-developer</p>
              <p>Максим Берёзка</p>
            </div>
            <a className={styles['footer__politics']} target="_blank" rel="noreferrer" href="#">
              Политика конфиденциальности
            </a>
          </li>
          <li className={styles['footer__element']}>
            <h3 className={styles['footer__title']}>Navigation</h3>
            <ul className={styles['footer__items']}>
              {navLinkData.map((item, index) => (
                <li key={index} className={styles['footer__item']}>
                  <LinkScroll
                    className={styles['footer__link']}
                    to={item.href}
                    smooth={true}
                    duration={500}
                  >
                    {item.link}
                  </LinkScroll>
                </li>
              ))}
            </ul>
          </li>
          <li className={`${styles['footer__element']} ${styles['footer__element--navigation']}`}>
            <h3 className={styles['footer__title']}>Contact</h3>
            <ul className="footer__items">
              <li className={styles['footer__item']}>
                <a
                  className={styles['footer__link']}
                  target="_blank"
                  rel="noreferrer"
                  href="https://goo.gl/maps/D8jKUmeRoAsag6Px8"
                >
                  г. Москва, Россия
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
              <li className={styles['footer__item']}>
                <Link href="/cv.pdf" passHref>
                  <a className={styles['footer__link']}>
                    CV
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles['footer__element']}>
            <h3 className={styles['footer__title']}>Social link</h3>
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
