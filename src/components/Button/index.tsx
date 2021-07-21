import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

export interface IButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  addClass?: string;
  size?: 'sm' | 'md';
}

const Button: FC<IButtonProps> = ({ addClass, size = 'md', ...props }) => {
  const appearanceList = {
    [styles['button--sm']]: size === 'sm',
  };
  return <button className={classNames(styles['button'], appearanceList, addClass)} {...props} />;
};

export default Button;
