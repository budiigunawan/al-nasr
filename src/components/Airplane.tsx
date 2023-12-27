import { StarIcon } from '@/assets/icons';
import Air1 from '@/assets/img/air-1.png';
import Air2 from '@/assets/img/air-2.png';
import Air3 from '@/assets/img/air-3.png';
import Air4 from '@/assets/img/air-4.png';
import Air5 from '@/assets/img/air-5.png';

export const Airplane = () => {
  return (
    <section className='container airplane'>
      <div className='airplane__text'>
        <h3 className='airplane__title'>Airways Accomodation</h3>
        <p className='airplane__subtitle'>
          We cooperate with several airlines for Umrah and Hajj
        </p>
        <div className='airplane__rating'>
          <StarIcon />
          <p>5.0 Rating</p>
        </div>
      </div>
      <div className='airplane__logo-container'>
        <img src={Air2} alt='qatar airways logo' />
        <img src={Air1} alt='garuda indonesia logo' />
        <img src={Air4} alt='saudia logo' />
        <img src={Air3} alt='fly emirates logo' />
        <img src={Air5} alt='lion air logo' />
      </div>
    </section>
  );
};
