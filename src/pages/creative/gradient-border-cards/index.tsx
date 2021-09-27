import React from 'react';

import { ReturnBack } from '@/components/atoms/ReturnBack';

import styles from './gradient-card.module.scss';

const GradientCard = () => {
  return (
    <>
      <div className={`${styles['gradient-cards']} creative-wrap`}>
        <div className={styles['wrapper']}>
          <div className={styles['wrapper__box']}>
            <span />
            <div className={styles['wrapper__content']}>
              <h2 className={styles['wrapper__content-title']}>Card One</h2>
              <p className={styles['wrapper__content-text']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga. Voluptatum
                eligendi hic numquam deleniti, corrupti ea ad sapiente assumenda consequatur
                aspernatur, cupiditate quis aliquid distinctio, placeat ipsa eius consequuntur!
              </p>
              <a className={styles['wrapper__content-link']} href="#">
                Read More
              </a>
            </div>
          </div>

          <div className={styles['wrapper__box']}>
            <span />
            <div className={styles['wrapper__content']}>
              <h2 className={styles['wrapper__content-title']}>Card Two</h2>
              <p className={styles['wrapper__content-text']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga. Voluptatum
                eligendi hic numquam deleniti, corrupti ea ad sapiente assumenda consequatur
                aspernatur, cupiditate quis aliquid distinctio, placeat ipsa eius consequuntur!
              </p>
              <a className={styles['wrapper__content-link']} href="#">
                Read More
              </a>
            </div>
          </div>

          <div className={styles['wrapper__box']}>
            <span />
            <div className={styles['wrapper__content']}>
              <h2 className={styles['wrapper__content-title']}>Card Three</h2>
              <p className={styles['wrapper__content-text']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga. Voluptatum
                eligendi hic numquam deleniti, corrupti ea ad sapiente assumenda consequatur
                aspernatur, cupiditate quis aliquid distinctio, placeat ipsa eius consequuntur!
              </p>
              <a className={styles['wrapper__content-link']} href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <ReturnBack />
    </>
  );
};

export default GradientCard;
