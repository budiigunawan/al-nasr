import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
};

export const Button = ({
  className = 'btn btn--primary',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
