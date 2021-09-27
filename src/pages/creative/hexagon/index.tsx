import React from 'react';

import styles from './hexagon.module.scss';

const Hexagon = () => {
  return (
    <div className={`${styles['hexagon']}`}>
      <div className={styles['hexagon__container']}>
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <div key={index} className={styles['hexagon__row']}>
              {Array(20)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className={styles['hexagon__block']} />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hexagon;
