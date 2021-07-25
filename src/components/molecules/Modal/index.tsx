import React, { FC, useEffect, useRef } from 'react';

import styles from './style.module.scss';

interface IModalProps {
  callBack: () => void;
}

const Modal: FC<IModalProps> = ({ children, callBack }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (e: any) => {
    if (!e.path.includes(boxRef.current)) {
      callBack();
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles['modal']}>
      <div className={styles['modal__box']} ref={boxRef}>
        {children}
        <button className={styles['modal__close']} onClick={callBack} />
      </div>
    </div>
  );
};

export default Modal;
