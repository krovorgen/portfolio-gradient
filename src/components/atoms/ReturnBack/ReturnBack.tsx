import React from 'react';
import Link from 'next/link';

import ComeBackSVG from '../../../assets/come-back.svg';

import styles from './style.module.scss';

export const ReturnBack = () => {
  return (
    <Link href="/" scroll={false}>
      <a className={styles['come-back']}>
        <ComeBackSVG />
      </a>
    </Link>
  );
};
