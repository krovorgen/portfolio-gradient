import React from 'react';
import Web from '../assets/web.svg';
import Ui from '../assets/ui.svg';
import Bots from '../assets/bots.svg';
import styles from '@/components/organisms/About/style.module.scss';

export const mockCardInfoData: { img: JSX.Element; front: string; back: JSX.Element }[] = [
  {
    img: <Web className={styles['card__img']} />,
    front: 'Frontend',
    back: (
      <>
        A frontend developer is responsible for the appearance of a website or a mobile application:
        he types up templates, decorates text and images beautifully, and improves user interaction
        with the interface.
      </>
    ),
  },
  {
    img: <Ui className={styles['card__img']} />,
    front: 'Bot development',
    back: (
      <>
        A chatbot is a top-end tool that can help solve a number of basic company issues. These
        questions relate to consulting, maintaining contacts and increasing sales.
      </>
    ),
  },
  {
    img: <Bots className={styles['card__img']} />,
    front: 'Backend',
    back: (
      <>
        Backend development is a set of hardware and software that implements the logic of the site.
        Simply put, this is what is hidden from the user`s eyes and happens outside of his browser
        and computer.
      </>
    ),
  },
];
