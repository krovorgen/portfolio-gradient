import React, { useEffect, useRef } from 'react';

import { ReturnBack } from '@/components/atoms/ReturnBack';

import styles from './hexagon.module.scss';

const Hexagon = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const callbackHandler = (e: MouseEvent) => {
      boxRef.current.style.left = e.clientX + 'px';
      boxRef.current.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', callbackHandler);
    return () => {
      window.removeEventListener('mousemove', callbackHandler);
    };
  }, []);
  return (
    <>
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
          <div ref={boxRef} className={styles['hexagon__cursor']} />
        </div>
      </div>
      <ReturnBack />
    </>
  );
};

export default Hexagon;
