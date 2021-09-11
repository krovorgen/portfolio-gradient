import React, { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

export interface IInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  addClass?: string;
  complete?: boolean;
}

const Input: FC<IInputProps> = ({ addClass, complete, ...props }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);

  const appearanceList = {
    [styles['input--complete']]: complete,
  };

  return (
    <input
      className={classNames(styles['input'], appearanceList, addClass)}
      type={'text'}
      onChange={onChangeValue}
      value={inputValue}
      {...props}
    />
  );
};

export default Input;
