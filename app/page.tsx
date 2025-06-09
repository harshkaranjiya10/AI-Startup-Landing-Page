import CallToAction from '@/app/layout/CallToAction';
import Footer from '@/app/layout/Footer';
import Header from '@/app/layout/Header';
import Hero from '@/app/layout/Hero';
import Testimonials from '@/app/layout/Testimonials';
import Features  from '@/app/layout/Features';
import LogoTicker   from '@/app/layout/LogoTicker';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker  />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer  />
    </>
    
  );
}
