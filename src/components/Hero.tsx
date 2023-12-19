import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ReviewCard } from './ui/ReviewCard';

import Reviewer1 from '@/assets/img/reviewer-1.png';
import Reviewer2 from '@/assets/img/reviewer-2.png';

export const Hero = () => {
  return (
    <section className='container'>
      <div className='hero'>
        <div className='hero__info'>
          <Badge text='No.1 in Indonesia' />
          <h1 className='hero__info__title'>
            Make it easy for your umrah worship with Al Nasr Travel
          </h1>
          <p className='hero__info__subtitle'>
            Facilitate your Umrah pilgrimage with us, we already have hundreds
            of thousands of customers, you can go for Umrah to Mecca and Medina
          </p>
          <Button>Contact us</Button>
        </div>
        <div className='hero__illustration'>
          <div className='hero__illustration__box'></div>
          <div className='hero__illustration__video'>
            <iframe
              width={'406px'}
              height={'507px'}
              src='https://www.youtube.com/embed/rEDv_hUCB50'
              title='Masjid Al Haram'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='hero__illustration__review-one'>
            <ReviewCard
              img={Reviewer1}
              author='Mohammad Qassem'
              review='The most amazing city of Mecca'
            />
          </div>
          <div className='hero__illustration__review-two'>
            <ReviewCard
              img={Reviewer2}
              author='Ali Qualadeini'
              review={`Let's worship as good Muslims`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
