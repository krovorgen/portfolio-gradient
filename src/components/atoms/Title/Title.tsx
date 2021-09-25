import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

export interface ITitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  addClass?: string;
  tag?: 'h1' | 'h2' | 'h3';
}

export const Title: FC<ITitleProps> = ({ addClass, tag = 'h3', ...props }) => {
  const appearanceList = {
    [styles['title--h1']]: tag === 'h1',
    [styles['title--h2']]: tag === 'h2',
  };

  return (
    <>
      {tag === 'h1' && (
        <h1 className={classNames(styles['title'], appearanceList, addClass)} {...props} />
      )}
      {tag === 'h2' && (
        <h2 className={classNames(styles['title'], appearanceList, addClass)} {...props} />
      )}
      {tag === 'h3' && <h3 className={classNames(styles['title'], addClass)} {...props} />}
    </>
  );
};
