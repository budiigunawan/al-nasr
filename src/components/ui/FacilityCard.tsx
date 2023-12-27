import { ReactNode } from 'react';

type FacilityCardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export const FacilityCard = ({ icon, title, subtitle }: FacilityCardProps) => {
  return (
    <div className='facility'>
      <div className='facility__left'>
        <div className='facility__icon'>{icon}</div>
      </div>
      <div className='facility__right'>
        <h3 className='facility__title'>{title}</h3>
        <p className='facility__subtitle'>{subtitle}</p>
      </div>
    </div>
  );
};
