import React, { FC, useState } from 'react';

import { Modal } from '@/components/index';
import { SliderMockDataType } from '@/components/organisms/Portfolio';

import styles from './style.module.scss';

interface IModalWorkProps {
  count: number;
  sliderMockData: SliderMockDataType[];
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
      {modalStatus && <Modal callBack={toggleModalStatus}>{JSON.stringify(sliderMockData)}</Modal>}
    </div>
  );
};

export default ModalWork;
