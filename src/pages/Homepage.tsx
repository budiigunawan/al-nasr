import { About } from '@/components/About';
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
    </>
  );
};
