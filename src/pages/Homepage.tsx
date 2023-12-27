import { About } from '@/components/About';
import { Airplane } from '@/components/Airplane';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Package } from '@/components/Package';

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Package />
      <Airplane />
    </>
  );
};
