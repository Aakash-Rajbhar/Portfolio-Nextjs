import React from 'react';
import { TypewriterEffectSmoothDemo } from '../components/TypeWriter';
import { Spotlight } from './ui/Spotlight';
import porfoliobg from '../public/portfolio-bg.png';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-8 left-90 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <Image
          src={porfoliobg}
          width={300}
          height={300}
          alt="portfolio"
          className="py-6 w-[300px] h-[350px] md:w-[350px] md:h-[400px]"
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TypewriterEffectSmoothDemo />
      </div>
    </section>
  );
}
