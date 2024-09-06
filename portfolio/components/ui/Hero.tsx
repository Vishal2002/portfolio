'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { Button } from "./button";
import { Spotlight } from './Spotlight';

const words = [
  {
    text: "Building",
  },
  {
    text: "digital",
  },
  {
    text: "experiences",
  },
  {
    text: "that",
  },
  {
    text: "matter.",
    className: "text-blue-500",
  },
];

const Hero = () => {
  return (
    <div className="h-screen w-full text-white flex items-center justify-center relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text content */}
        <div className="text-center md:text-left md:w-1/2">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Vishal Sharma
          </motion.h1>
          
          <div className="h-20"> {/* Fixed height container */}
            <TypewriterEffectSmooth words={words} className="text-white" />
          </div>
        
          <motion.p 
            className="mt-4 text-xl text-gray-300 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Transforming ideas into elegant, efficient, and user-centric solutions. 
            Let's create something extraordinary together.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              className="bg-blue-600 rounded-sm hover:bg-blue-700 text-white"
            >
              View Projects
            </Button>
            <Button
              className="bg-transparent rounded-sm hover:bg-white/10 text-white border border-white"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div 
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="/portfolio/assets/cover_photo.jpg" 
              alt="Vishal Sharma"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;