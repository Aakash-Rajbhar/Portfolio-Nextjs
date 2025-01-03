'use client';
import { cn } from '@/utils/cn';
import { BackgroundGradientAnimation } from './GradientBg';
import { GlobeDemo } from './GridGlobe';
import Lottie from 'react-lottie';
import { useState } from 'react';
import animationData from '@/data/confetti.json';
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('akash.kumarajbhar@gmail.com');
    setCopied(true);
  };

  return (
    <div
      className={cn(
        `row-span-1 relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4`,
        className
      )}
      style={{
        // background: 'rgba(23,23,23, .6)',
        backgroundColor:
          'linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(0,0,0,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center '} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              className={cn(imgClassName, 'object-cover object-center')}
              alt={img}
              width={300}
              height={300}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && 'w-full opacity-80'
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              className={'object-cover object-center w-full h-full'}
              alt={spareImg}
              width={300}
              height={300}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className="font-sans font-extralight text-neutral-600 text-sm md:text-xs lg:text-base z-10 dark:text-neutral-200">
            {description}
          </div>
          <div
            className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 ${
              id === 6 && 'text-neutral-200'
            } ${
              id === 1 && 'text-neutral-200'
            } text-neutral-600 dark:text-neutral-200`}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-4 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-4">
                {['React', 'Next.js', 'TailwindCSS'].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-neutral-400 dark:bg-[#1c1c1d]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-neutral-400 dark:bg-[#1c1c1d]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-4">
                <span className="py-4 px-3 rounded-lg text-center bg-neutral-400 dark:bg-[#1c1c1d]" />
                {['JavaScript', 'Node JS', 'Express Js'].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-neutral-400 dark:bg-[#1c1c1d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 text-white`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? 'Email copied' : 'Copy My Email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
