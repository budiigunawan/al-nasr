import { ReactNode } from 'react';

type ButtonProps = {
  className?: string;
  children: ReactNode;
};

export const Button = ({
  className = 'btn btn--primary',
  children,
}: ButtonProps) => {
  return (
    <>
      <button className={className}>{children}</button>
    </>
  );
};
