import { About } from '@/components/About';
import { Airplane } from '@/components/Airplane';
import { Facilities } from '@/components/Facilities';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Package } from '@/components/Package';
import { Testimonials } from '@/components/Testimonials';

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Package />
      <Airplane />
      <Facilities />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
};
