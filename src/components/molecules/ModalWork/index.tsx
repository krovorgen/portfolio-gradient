import React, { FC, useState } from 'react';

import { Modal } from '@/components/index';
import { SliderContentType } from '../../../types';

import styles from './style.module.scss';
import Image from 'next/image';

interface IModalWorkProps {
  count: number;
  sliderMockData: SliderContentType[];
}

const ModalWork: FC<IModalWorkProps> = ({ count, sliderMockData }) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const toggleModalStatus = () => {
    setModalStatus(!modalStatus);
  };

  return (
    <div className={styles['modal-work']}>
      <div className={styles['modal-work__inner']}>
        <button className={styles['modal-work__button']} onClick={toggleModalStatus}>
          Смотреть все ({count})
        </button>
      </div>
      {modalStatus && (
        <Modal callBack={toggleModalStatus} variant={'with-item'}>
          <ul className={styles['modal-work__items']}>
            {sliderMockData.map((item, index) => (
              <li className={styles['modal-work__item']} key={index}>
                <a
                  className={styles['modal-work__link']}
                  href={item.link}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  <Image
                    className={styles['modal-work__preview']}
                    src={item.img}
                    width={282}
                    height={165}
                    alt={'Slider image'}
                  />
                </a>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default ModalWork;
