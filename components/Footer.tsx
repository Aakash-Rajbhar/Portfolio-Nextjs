import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-neutral-600 dark:text-neutral-200">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="md:mt-10 my-5 text-center text-neutral-600 dark:text-neutral-200">
          Reach out to me today and let&lsquo;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="mailto:theskyrajbhar@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-neutral-600 dark:text-neutral-200">
          Copyright © 2024 Aakash Rajbhar
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="cursor-pointer w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-neutral-600 dark:bg-black-200 rounded-lg border-white-200"
            >
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
