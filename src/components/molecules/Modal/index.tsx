import React, { FC, useEffect, useRef } from 'react';

import styles from './style.module.scss';
import classNames from 'classnames';

interface IModalProps {
  callBack: () => void;
  variant?: 'with-item';
}

const Modal: FC<IModalProps> = ({ children, callBack, variant }) => {
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

  const appearances = {
    [styles['modal__box--with-item']]: variant === 'with-item',
  };

  return (
    <div className={styles['modal']}>
      <div className={classNames(styles['modal__box'], appearances)} ref={boxRef}>
        {children}
        <button className={styles['modal__close']} onClick={callBack} />
      </div>
    </div>
  );
};

export default Modal;
