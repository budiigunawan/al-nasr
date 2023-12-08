import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export const Navbar = () => {
  return (
    <>
      <header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='#about-us'>About Us</Link>
            </li>
            <li>
              <Link to='#package'>Package</Link>
            </li>
            <li>
              <Link to='#facilities'>Facilities</Link>
            </li>
            <li>
              <Link to='#gallery'>Gallery</Link>
            </li>
          </ul>
        </nav>
        <Button>Contact us</Button>
      </header>
    </>
  );
};
