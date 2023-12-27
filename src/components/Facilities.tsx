import {
  ConselingIcon,
  HealthIcon,
  HostelIcon,
  MeatIcon,
  MemberIcon,
  SecurityIcon,
  VaccineIcon,
  VehicleIcon,
} from '@/assets/icons';
import { FacilityCard } from './ui/FacilityCard';

export const Facilities = () => {
  const facilityList = [
    {
      id: 'fa-1',
      icon: <SecurityIcon />,
      title: 'Safety & Security',
      subtitle: 'We take care of your security in 24 hours',
    },
    {
      id: 'fa-2',
      icon: <ConselingIcon />,
      title: 'Conseling',
      subtitle: 'Provide counseling to stay fit spiritually and religius',
    },
    {
      id: 'fa-3',
      icon: <VehicleIcon />,
      title: 'Vehicle In Saudi',
      subtitle: 'Bus and Car Vehicles While in Saudi',
    },
    {
      id: 'fa-4',
      icon: <HealthIcon />,
      title: 'Health In Saudi',
      subtitle: 'Free Health Facilities for every customer',
    },
    {
      id: 'fa-5',
      icon: <HostelIcon />,
      title: 'Hostel Rate 5',
      subtitle: '5 star hotel accommodation every customer',
    },
    {
      id: 'fa-6',
      icon: <MeatIcon />,
      title: 'Food & Drink',
      subtitle: 'Provide food and drinks while in Saudi',
    },
    {
      id: 'fa-7',
      icon: <MemberIcon />,
      title: 'Membership',
      subtitle: 'Obtain a membership card for each customer',
    },
    {
      id: 'fa-8',
      icon: <VaccineIcon />,
      title: 'Vaccine ',
      subtitle: 'Free meningitis vaccine for all customers',
    },
  ];

  return (
    <section className='facilities'>
      <div className='container'>
        <div className='facilities__header'>
          <h2 className='facilities__header__title'>
            Facilities We Provide For You
          </h2>
          <p className='facilities__header__subtitle'>
            We provide comfort for our customers, with the various facilities we
            provide that we provide
          </p>
        </div>
        <div className='facilities-container'>
          {facilityList.map((facility) => (
            <FacilityCard
              key={facility.id}
              icon={facility.icon}
              title={facility.title}
              subtitle={facility.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
