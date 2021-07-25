import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

export interface IParagraphProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  addClass?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Paragraph: FC<IParagraphProps> = ({ addClass, size = 'md', ...props }) => {
  const appearanceList = {
    [styles['paragraph--sm']]: size === 'sm',
    [styles['paragraph--lg']]: size === 'lg',
  };
  return (
    <>
      <p className={classNames(styles['paragraph'], appearanceList, addClass)} {...props} />
    </>
  );
};

export default Paragraph;
