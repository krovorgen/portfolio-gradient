import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export interface IButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button: FC<IButtonProps> = ({ ...props }) => {
  return <button {...props} />;
};

export default Button;
