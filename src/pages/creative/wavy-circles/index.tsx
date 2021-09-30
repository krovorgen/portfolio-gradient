import React from 'react';

import { ReturnBack } from '@/components/atoms/ReturnBack';

import styles from './style.module.scss';

const WavyCircles = () => {
  return (
    <>
      <div className={`${styles['wavy-circles']}  creative-wrap`}>
        <div className={styles['wavy-circles__wrap']}>
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <span className={styles['wavy-circles__circle']} key={index} />
            ))}
        </div>
      </div>
      <ReturnBack />
    </>
  );
};

export default WavyCircles;
