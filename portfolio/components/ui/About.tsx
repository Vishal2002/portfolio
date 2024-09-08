'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Who I Am",
    description:
      "I'm Vishal Sharma, a passionate full-stack developer with a keen eye for creating seamless digital experiences. With a background in computer science and years of hands-on experience, I bring ideas to life through code.",
  },
  {
    title: "My Expertise",
    description:
      "Specializing in modern web technologies, I excel in React, Next.js, Node.js, and cloud technologies. My approach combines technical proficiency with creative problem-solving to deliver robust and scalable solutions.",
  },
  {
    title: "My Mission",
    description:
      "I'm driven by the desire to create technology that makes a positive impact. Whether it's optimizing user experiences or developing innovative features, my goal is to contribute to projects that push the boundaries of what's possible in tech.",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-black-100 ">
      <motion.h2 
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <StickyScroll content={content} />
    </section>
  );
};

export default About;