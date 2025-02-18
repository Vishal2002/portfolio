//@ts-nocheck
'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { Button } from "./button";
import { Spotlight } from './Spotlight';

const words = [
  { text: "Build" },
  { text: "what" },
  { text: "matters.", className: "text-blue-500" },
];

const Hero = ({ onProjectsClick, onContactClick }) => {
  return (
    <div className="min-h-screen w-full text-white flex items-center justify-center relative overflow-hidden py-20">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4">
            Hi👋,I am Vishal Sharma
          </h1>
          
          <div className="md:h-20 md:mb-4 ">
            <TypewriterEffectSmooth words={words} />
          </div>
        
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
            Transforming ideas into elegant, efficient, and
            user-centric solutions. Let's create something extraordinary together.
          </p>
          
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              className="bg-blue-600 rounded-sm hover:bg-blue-700 text-white px-6 py-3"
              onClick={onProjectsClick}
            >
              View Projects
            </Button>
            <Button
              className="bg-transparent rounded-sm hover:bg-white/10 text-white border border-white px-6 py-3"
              onClick={onContactClick}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="https://i.ibb.co/k2KZ0X6/vishal.png"
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