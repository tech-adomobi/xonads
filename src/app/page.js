'use client'
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ReachAudiences } from '@/components/ReachAudiences';
import BackgroundVideo from '@/components/BackgroundVideo';
import { useState, useEffect } from 'react'; // Import useState and useEffect


export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false); // State for animation

  useEffect(() => {
    // Simulate loading or waiting for some action to complete.
    // You might want to replace this with actual image/video loading logic.
    const timer = setTimeout(() => {
      setHeroLoaded(true);
    }, 1000); // Adjust the delay as needed (1000ms = 1 second)

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, []);

  return (
    <main className="min-h-screen overflow-hidden relative">
      <BackgroundVideo />

      <div className="relative z-10">
        <Navbar />
        <Hero /> 
      </div>

      {/* <div
        className={`relative z-10 bg-black pt-20 px-10 lg:px-20 xl:px-40 
                   transition-opacity duration-1000 ease-in-out ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: heroLoaded ? '200ms' : '0ms' }} // Delay the transition
      >
        <ReachAudiences />
      </div> */}
    </main>
  );
}