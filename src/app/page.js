
'use client';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ReachAudiences } from '@/components/ReachAudiences';
import BackgroundVideo from '@/components/BackgroundVideo';
import { useState, useEffect } from 'react';
import { AdvertisersSection } from '@/components/AdvertisersSection';

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <BackgroundVideo />

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>


      <ReachAudiences /> 
       

      {/* <AdvertisersSection /> */}
      


    </main>
  );
}