import { ArrowLeft, ArrowRight } from '@/assets/icons';
// import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import User1 from '@/assets/img/user-1.png';

export const Testimonials = () => {
  return (
    <section className='testimonials container'>
      <div className='testimonials__header'>
        <div className='testimonials__header__title'>
          <h2 className='testimonials__title'>
            Testimonials from our customers
          </h2>
        </div>
        <div className='testimonials__header__action'>
          <Button leftIcon={<ArrowLeft />}>Previous</Button>
          <p className='testimonials__subtitle'>
            We have 100.000+ customers, here are our customer testimonials
          </p>
        </div>
      </div>
      <div className='testimonials__body'>
        <div className='testimonials-card'>
          <div className='testimonials-card__left'>
            <img
              src={User1}
              alt='customers'
              className='testimonials-card__img'
            />
            {/* <Badge text='4.9' /> */}
          </div>
          <div className='testimonials-card__right'>
            {/* <Badge text='Al Nasr Umrah' /> */}
            <h3 className='testimonials-card__title'>Humaira Khaira</h3>
            <p className='testimonials-card__text'>
              I am very satisfied with Al Nasr Travel's service, starting from
              when we arrived in Saudi until we returned to Indonesia. We
              provide very good service.
            </p>
          </div>
        </div>
      </div>
      <div className='testimonials__footer'>
        <Button rightIcon={<ArrowRight />}>Next</Button>
      </div>
    </section>
  );
};
