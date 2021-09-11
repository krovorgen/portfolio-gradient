import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

import { navLinkData } from '../../../data/navLinkData';

import styles from './style.module.scss';

const Header: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const activeClass = {
    [styles['active']]: toggleMenu,
  };

  return (
    <header className={styles['header']}>
      <div className="container">
        <nav className={styles['menu']}>
          <a className={styles['logo']} href="#">
            MAKSIM BIAROZKA
          </a>
          <ul className={classNames(styles['menu__items'], activeClass)}>
            {navLinkData.map((item, index) => (
              <li key={index} className={styles['menu__item']}>
                <Link className={styles['menu__link']} to={item.href} smooth={true} duration={500}>
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className={classNames(styles['menu__button'], activeClass)}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
