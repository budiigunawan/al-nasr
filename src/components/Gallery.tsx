import Gallery1 from '@/assets/img/gallery-1.png';
import Gallery2 from '@/assets/img/gallery-2.png';
import Gallery3 from '@/assets/img/gallery-3.png';
import Gallery4 from '@/assets/img/gallery-4.png';
import Gallery5 from '@/assets/img/gallery-5.png';

export const Gallery = () => {
  return (
    <section className='gallery-container'>
      <div className='container gallery'>
        <h2 className='gallery__title'>Gallery Footage In Saudi Arabia</h2>
        <p className='gallery__subtitle'>
          We provide confort for our customers, with the various facilities we
          provide that we provide
        </p>
        <div className='gallery__body'>
          <img src={Gallery1} alt='gallery-1' className='gallery__main-image' />
          <div className='gallery__sub-image'>
            <img src={Gallery2} alt='gallery-2' />
            <img src={Gallery3} alt='gallery-3' />
            <img src={Gallery4} alt='gallery-4' />
            <img src={Gallery5} alt='gallery-5' />
          </div>
        </div>
      </div>
    </section>
  );
};
