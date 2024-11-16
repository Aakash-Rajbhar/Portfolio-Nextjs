import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies, services } from '@/data';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const Clients = () => {
  return (
    <div className="py-20" id="services">
      <h1 className="heading pb-4">
        <span className="text-purple">Services </span> that I offer
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={services} direction="left" speed="normal" />
      </div>
    </div>
  );
};

export default Clients;
