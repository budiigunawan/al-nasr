import { ReactNode } from 'react';
import { Button } from './ui/Button';
import AboutUs from '@/assets/img/about-us.png';
import { FlightIcon, TicketIcon, HotelIcon, VisaIcon } from '@/assets/icons';

type FeatureProps = {
  icon: ReactNode;
  text: string;
};

const Feature = ({ icon, text }: FeatureProps) => {
  return (
    <div className='about__info__list'>
      <div className='about__info__list__icon'>{icon}</div>
      <div className='about__info__list__text'>{text}</div>
    </div>
  );
};

export const About = () => {
  const featureList = [
    {
      id: 'ali-1',
      icon: <FlightIcon />,
      text: 'Flight Jakarta Saudi - Saudi Jakarta',
    },
    {
      id: 'ali-2',
      icon: <TicketIcon />,
      text: 'Tickets are included in the cost',
    },
    {
      id: 'ali-3',
      icon: <HotelIcon />,
      text: 'Comfortable hotel with a rating of 4',
    },
    {
      id: 'ali-4',
      icon: <VisaIcon />,
      text: `We cover the Visa Fee and it's included`,
    },
  ];

  return (
    <section className='container about'>
      <div className='about__illustration'>
        <img src={AboutUs} alt='user rating' />
      </div>
      <div className='about__info'>
        <h2 className='about__info__title'>
          A Wonderful Agency To Fullfill your Dreams
        </h2>
        <p className='about__info__subtitle'>
          The Hajj and Umrah pilgrimages are smooth, the heart is clean. we have
          been trusted since 2006 and have obtained a license from SAUDI ARABIA
          to become this travel agency.
        </p>
        <div className='about__info__list-container'>
          {featureList.map((feature) => (
            <Feature key={feature.id} icon={feature.icon} text={feature.text} />
          ))}
        </div>
        <div className='about__info__buttons'>
          <Button>Learn more</Button>
          <Button className='btn btn--outline-primary'>Contact Us</Button>
        </div>
      </div>
    </section>
  );
};
