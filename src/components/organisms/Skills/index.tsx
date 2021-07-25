import React from 'react';
import { Title } from '@/components/index';

import styles from './style.module.scss';

type SkillsMockDataType = {
  icon: string;
  percent: string;
  text: string;
};

const Skills = () => {
  const skillsMockData: SkillsMockDataType[] = [];

  return (
    <section className={styles['skills']}>
      <Title addClass={styles['skills__title']} tag={'h3'}>
        Навыки
      </Title>
      <div className={`container `}>
        <ul className="skills__items">
          <li className="skills__item"></li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
