import React from 'react';

import { ReturnBack } from '@/components/atoms/ReturnBack';

import styles from './style.module.scss';

const RainAnimation = () => {
  return (
    <>
      <section className={styles['rain-animation']} />
      <ReturnBack />
    </>
  );
};

export default RainAnimation;
