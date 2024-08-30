"use client";

import Particles from "@/components/magicui/particles";

const ParticlesBg = ({ children }) => {
  return (
    <div className="relative flex h-auto w-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        {children}
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="black"
        refresh
      />
    </div>
  );
};

export default ParticlesBg;
