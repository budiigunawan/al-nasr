import LogoFooter from '@/assets/img/logo-footer.png';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/assets/icons';

export const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='container'>
        <div className='footer'>
          <div className='footer__top'>
            <div className='footer__logo'>
              <img src={LogoFooter} alt='al nasr logo' />
              <p>
                Comfortable and Quiet Worship, Our Service No. 1 in Indonesia
              </p>
            </div>
            <div className='footer__links'>
              <div className='footer__quick'>
                <h3 className='footer__title'>Quick Link</h3>
                <ul className='footer__links-container'>
                  <li>
                    <Link className='footer__link' to='#'>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className='footer__link' to='#'>
                      Flight Accommodation
                    </Link>
                  </li>
                  <li>
                    <Link className='footer__link' to='#'>
                      Facilities
                    </Link>
                  </li>
                  <li>
                    <Link className='footer__link' to='#'>
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='footer__umrah'>
                <h3 className='footer__title'>Package Umrah</h3>
                <ul className='footer__links-container'>
                  <li>
                    <Link className='footer__link' to='#'>
                      Al Nasr Umrah Bronze
                    </Link>
                  </li>
                  <li>
                    <Link className='footer__link' to='#'>
                      Al Nasr Umrah Silver
                    </Link>
                  </li>
                  <li>
                    <Link className='footer__link' to='#'>
                      Al Nasr Umrah Gold
                    </Link>
                  </li>
                  <li>
                    <Link className='footer__link' to='#'>
                      Al Nasr Umrah Priority
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='footer__hajj'>
                <h3 className='footer__title'>Package Hajj</h3>
                <ul className='footer__links-container'>
                  <li>
                    <Link className='footer__link' to='#'>
                      Al Nasr Hajj Diamond
                    </Link>
                  </li>
                  <li>
                    <Link className='footer__link' to='#'>
                      Al Nasr Hajj Platinum
                    </Link>
                  </li>
                  <li>
                    <Link className='footer__link' to='#'>
                      Al Nasr Hajj Priority
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='footer__office'>
                <h3 className='footer__title'>Office Place</h3>
                <ul className='footer__links-container'>
                  <li>
                    <Link className='footer__link' to='#'>
                      Indonesia
                    </Link>
                  </li>
                  <li>
                    <Link className='footer__link' to='#'>
                      Saudi Arabia
                    </Link>
                  </li>
                  <li>
                    <Link className='footer__link' to='#'>
                      Uni Emirates Arab
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer__bottom'>
            <div className='footer__copyright'>
              <p>Copyright © 2006 - 2023 Al Nasr Travel | All Reserverd</p>
            </div>
            <div className='footer__socmed'>
              <ul className='footer__socmed-container'>
                <li className='footer__socmed-link'>
                  <a href='#'>
                    <InstagramIcon />
                  </a>
                </li>
                <li className='footer__socmed-link'>
                  <a href='#'>
                    <FacebookIcon />
                  </a>
                </li>
                <li className='footer__socmed-link'>
                  <a href='#'>
                    <TwitterIcon />
                  </a>
                </li>
                <li className='footer__socmed-link'>
                  <a href='#'>
                    <YoutubeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
