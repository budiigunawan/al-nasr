import { About } from '@/components/About';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
};
