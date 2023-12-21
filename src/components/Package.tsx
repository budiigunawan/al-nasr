import { Button } from './ui/Button';
import {
  FlightIcon,
  TicketIcon,
  HotelIcon,
  VisaIcon,
  MeatIcon,
} from '@/assets/icons';
import Package1 from '@/assets/img/package-1.png';
import Package2 from '@/assets/img/package-2.png';
import Package3 from '@/assets/img/package-3.png';

interface PackageData {
  img: string;
  category: string;
  tag: string;
  price: number;
  title: string;
  features?: string[];
}

type PackageCardProps = {
  data?: PackageData;
};

type PackageFeatureProps = {
  featureName: string;
};

const PackageFeature = ({ featureName }: PackageFeatureProps) => {
  if (featureName === 'flight') {
    return <FlightIcon />;
  } else if (featureName === 'ticket') {
    return <TicketIcon />;
  } else if (featureName === 'hotel') {
    return <HotelIcon />;
  } else if (featureName === 'visa') {
    return <VisaIcon />;
  } else if (featureName === 'meat') {
    return <MeatIcon />;
  } else {
    return null;
  }
};

const PackageCard = ({ data }: PackageCardProps) => {
  return (
    <div className='package__card'>
      <div className='package__card__header'>
        <img
          src={data?.img}
          alt={data?.title}
          className='package__card__image'
        />
        <div className='package__card__badge'>
          <div className='package__card__category'>{data?.category}</div>
          <div className='package__card__tag'>{data?.tag}</div>
        </div>
      </div>
      <div className='package__card__body'>
        <p className='package__card__title'>{data?.title}</p>
        <h3 className='package__card__price'>
          {`${data?.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
          })}/ `}
          <span className='package__card__price--green'>person</span>
        </h3>
        <div className='package__card__feature-container'>
          {data?.features?.map((feature) => (
            <div className='package__card__feature'>
              {<PackageFeature featureName={feature} />}
            </div>
          ))}
        </div>
        <Button className='btn btn--outline-primary btn--sm'>
          View Detail
        </Button>
      </div>
    </div>
  );
};

export const Package = () => {
  const packageList: PackageData[] = [
    {
      img: Package1,
      category: 'Bronze',
      tag: 'Best Seller',
      price: 1950,
      title: 'Al Nasr Special Umrah 9 Days',
      features: ['flight', 'ticket', 'hotel', 'visa'],
    },
    {
      img: Package2,
      category: 'Silver',
      tag: 'Special Seller',
      price: 2750,
      title: 'Al Nasr Special Umrah 17 Days',
      features: ['flight', 'ticket', 'hotel', 'visa'],
    },
    {
      img: Package3,
      category: 'Gold',
      tag: 'Long Trip',
      price: 4250,
      title: 'Al Nasr Special Umrah 25 Days',
      features: ['flight', 'ticket', 'hotel', 'visa', 'meat'],
    },
    {
      img: Package1,
      category: 'Diamond',
      tag: 'Best Seller',
      price: 20000,
      title: 'Al Nasr Special Hajj 30 Days',
      features: ['flight', 'ticket', 'hotel', 'visa', 'meat'],
    },
    {
      img: Package2,
      category: 'Platinum',
      tag: 'Special Offer',
      price: 25000,
      title: 'Al Nasr Special Hajj 30 Days',
      features: ['flight', 'ticket', 'hotel', 'visa', 'meat'],
    },
  ];

  console.log(packageList);

  return (
    <section className='container package'>
      <div className='package__heading'>
        <h2 className='package__heading__title'>
          Al Nasr Special Umrah and Hajj Packages
        </h2>
        <p className='package__heading__subtitle'>
          Choose your package according to your needs, guaranteed cheap and
          complete
        </p>
      </div>
      <div className='package__card-container'>
        {packageList.length &&
          packageList.map((packageData, idx) => (
            <PackageCard key={idx} data={packageData} />
          ))}
      </div>
    </section>
  );
};
