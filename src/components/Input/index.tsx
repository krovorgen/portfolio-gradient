import React, { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

export interface IInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  addClass?: string;
}

const Input: FC<IInputProps> = ({ addClass, ...props }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);

  return (
    <input
      className={classNames(styles['input'], addClass)}
      type={'text'}
      onChange={onChangeValue}
      value={inputValue}
      {...props}
    />
  );
};

export default Input;
