import { useMemo, useCallback, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from '@/assets/img/logo.svg';
import { Button } from './ui/Button';

export const Navbar = () => {
  const location = useLocation();
  const isHome: boolean = useMemo(() => {
    return location.hash === '';
  }, [location.hash]);

  const isActive = useCallback(
    (hash: string) => {
      return location.hash === hash;
    },
    [location.hash]
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='container'>
      <nav>
        <div className='navbar'>
          <img src={Logo} height={'68px'} alt='al nasr logo' />
          <ul className='navbar__menu'>
            <li>
              <Link
                to='/home'
                className={
                  isHome
                    ? 'navbar__menu__link navbar__menu__link--active'
                    : 'navbar__menu__link'
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/home#about-us'
                className={
                  isActive('#about-us')
                    ? 'navbar__menu__link navbar__menu__link--active'
                    : 'navbar__menu__link'
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/home#packages'
                className={
                  isActive('#packages')
                    ? 'navbar__menu__link navbar__menu__link--active'
                    : 'navbar__menu__link'
                }
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                to='/home#facilities'
                className={
                  isActive('#facilities')
                    ? 'navbar__menu__link navbar__menu__link--active'
                    : 'navbar__menu__link'
                }
              >
                Facilities
              </Link>
            </li>
            <li>
              <Link
                to='/home#gallery'
                className={
                  isActive('#gallery')
                    ? 'navbar__menu__link navbar__menu__link--active'
                    : 'navbar__menu__link'
                }
              >
                Gallery
              </Link>
            </li>
          </ul>
          <div className='navbar__buttons'>
            <Button>Contact us</Button>
          </div>
          <Button
            onClick={() => setIsOpen(true)}
            className='btn btn--primary navbar__hamburger'
          >
            &#9776;
          </Button>
        </div>
        <div className={isOpen ? 'm-navbar m-navbar--open' : 'm-navbar'}>
          <div className='m-navbar__button'>
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <ul className='m-navbar__menu'>
            <li>
              <Link
                to='/home'
                className={
                  isHome
                    ? 'navbar__menu__link navbar__menu__link--active'
                    : 'navbar__menu__link'
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/home#about-us'
                className={
                  isActive('#about-us')
                    ? 'navbar__menu__link navbar__menu__link--active'
                    : 'navbar__menu__link'
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/home#packages'
                className={
                  isActive('#packages')
                    ? 'navbar__menu__link navbar__menu__link--active'
                    : 'navbar__menu__link'
                }
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                to='/home#facilities'
                className={
                  isActive('#facilities')
                    ? 'navbar__menu__link navbar__menu__link--active'
                    : 'navbar__menu__link'
                }
              >
                Facilities
              </Link>
            </li>
            <li>
              <Link
                to='/home#gallery'
                className={
                  isActive('#gallery')
                    ? 'navbar__menu__link navbar__menu__link--active'
                    : 'navbar__menu__link'
                }
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
