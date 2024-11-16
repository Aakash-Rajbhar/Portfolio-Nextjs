'use client';
import Image from 'next/image';
import { TypewriterEffectSmooth } from '../components/ui/TypeWriterEffect';
import porfoliobg from '../public/portfolio-bg.png';
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: 'Hi',
    },
    {
      text: 'There, ',
    },
    {
      text: "I'm",
    },
    {
      text: 'Aakash',
    },
    {
      text: 'Rajbhar',
      className: ' dark:text-violet-500 text-violet-500',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center   ">
      <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-xl  ">
        Dynamic web magic with Next.js
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col justify-center items-center text-center  space-y-4 md:space-y-4 space-x-0 md:space-x-4">
        <p className="text-sm sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-200">
          Transforming Concepts into Seamless User Experiences,
          <br />A web developer based in India.
        </p>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <a href="#projects">Show my work</a>
        </button>
        {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>  */}
      </div>
    </div>
  );
}
