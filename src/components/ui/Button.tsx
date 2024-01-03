import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  className?: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: MouseEventHandler;
};

export const Button = ({
  className = 'btn btn--primary',
  children,
  leftIcon,
  rightIcon,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    </>
  );
};
