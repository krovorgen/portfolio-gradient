import React, { FC } from 'react';

import styles from './style.module.scss';

const Header: FC = () => {
  const navLinkData: { link: string; href: string }[] = [
    { link: 'Обо мне', href: '#' },
    { link: 'Портфолио', href: '#' },
    { link: 'Навыки', href: '#' },
    { link: 'Сотрудничество', href: '#' },
  ];

  return (
    <header className={styles['header']}>
      <div className="container">
        <nav className={styles['menu']}>
          <a className={styles['logo']} href="#">
            MAKSIM BIAROZKA
          </a>
          <ul className={styles['menu__items']}>
            {navLinkData.map((item, index) => (
              <li key={index} className={styles['menu__item']}>
                <a className={styles['menu__link']} href={item.href}>
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;