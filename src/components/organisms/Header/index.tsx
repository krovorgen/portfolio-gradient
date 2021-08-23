import React, { FC, useState } from 'react';

import styles from './style.module.scss';
import classNames from 'classnames';

const Header: FC = () => {
  const navLinkData: { link: string; href: string }[] = [
    { link: 'Обо мне', href: '#' },
    { link: 'Портфолио', href: '#' },
    { link: 'Навыки', href: '#' },
    { link: 'Сотрудничество', href: '#' },
  ];

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const appearanceMenu = {
    [styles['menu__items--active']]: toggleMenu,
  };

  return (
    <header className={styles['header']}>
      <div className="container">
        <nav className={styles['menu']}>
          <a className={styles['logo']} href="#">
            MAKSIM BIAROZKA
          </a>
          <ul className={classNames(styles['menu__items'], appearanceMenu)}>
            {navLinkData.map((item, index) => (
              <li key={index} className={styles['menu__item']}>
                <a className={styles['menu__link']} href={item.href}>
                  {item.link}
                </a>
              </li>
            ))}
          </ul>

          <button className={styles['menu__button']} onClick={() => setToggleMenu(!toggleMenu)}>
            Close
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
