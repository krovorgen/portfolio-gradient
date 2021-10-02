import React, { FC } from 'react';

import { ReturnBack } from '@/components/atoms/ReturnBack';

import styles from './style.module.scss';

const CubeEffects = () => (
  <>
    <div className={`${styles['cube-effects']}`}>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div key={index} className={styles['cube-effects__row']}>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className={styles['cube-effects__cube']}>
                  <span />
                  <span />
                  <span />
                </div>
              ))}
          </div>
        ))}
    </div>
    <ReturnBack />
  </>
);

export default CubeEffects;
