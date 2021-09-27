import React, { FC } from 'react';

import Airplane from './airplane.svg';
import Clouds from './clouds.svg';
import Forest from './forest.svg';
import House from "./house.svg"

import styles from './style.module.scss';

interface CarRidesProps {}

const CarRides: FC<CarRidesProps> = () => {
  return (
    <div className={styles['car-rides']}>
      <div className={styles['car-rides__wrap']}>
        <Airplane className={styles['car-rides__airplane']} />
        <Clouds className={styles['car-rides__clouds']} style={{ '--i': 1 }} />
        <Clouds className={styles['car-rides__clouds']} style={{ '--i': 2 }} />
        <Clouds className={styles['car-rides__clouds']} style={{ '--i': 3 }} />
        <Clouds className={styles['car-rides__clouds']} style={{ '--i': 4 }} />
        <Clouds className={styles['car-rides__clouds']} style={{ '--i': 5 }} />

        <Forest className={styles['car-rides__forest']} style={{ '--i': 1 }} />
        <Forest className={styles['car-rides__forest']} style={{ '--i': 2 }} />
        <Forest className={styles['car-rides__forest']} style={{ '--i': 3 }} />
        <Forest className={styles['car-rides__forest']} style={{ '--i': 4 }} />
        <Forest className={styles['car-rides__forest']} style={{ '--i': 5 }} />
        <Forest className={styles['car-rides__forest']} style={{ '--i': 6 }} />
        <Forest className={styles['car-rides__forest']} style={{ '--i': 7 }} />
        
        <House className={styles['car-rides__house']} style={{ '--i': 1 }} />
        <House className={styles['car-rides__house']} style={{ '--i': 2 }} />
        <House className={styles['car-rides__house']} style={{ '--i': 3 }} />
        <House className={styles['car-rides__house']} style={{ '--i': 4 }} />
        <House className={styles['car-rides__house']} style={{ '--i': 5 }} />
        <span className={styles['car-rides__sun']}></span>
        <span className={styles['car-rides__road']}></span>
      </div>
    </div>
  );
};

export default CarRides;
