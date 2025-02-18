'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link';
const projects = [
  {
    title: "Logarithm",
    description: "AI based Mock Interview Platform",
    image: "https://i.ibb.co/gFRxdXZ/image.png",
    visit: "https://logarithm-six.vercel.app/"
  },
  {
    title: "ClickWorthy",
    description: "AI based Image Caption Platform.",
    image: "https://i.ibb.co/P9LZkr1/image.png",
    visit: "https://clickworthy.vercel.app/"
  },
  {
    title: "HashPulse",
    description: "Share your Hashnode Analytics in more Awesome way.",
    image: "https://i.ibb.co/DfDkDyK/image.png",
    visit: "https://hash-pulse.vercel.app/"
  },
  {
    title: "CardioClarity",
    description: "Early Heart Attack Detection with Wearable Data.",
    image: "https://i.ibb.co/HTW7Td6/Screenshot-2024-08-13-015144.png",
    visit: "https://github.com/Vishal2002/CardioClarity"
  },
  {
    title: "Hero Junction",
    description: "Create Awesome Hero Sections for your Startup",
    image: "https://res.cloudinary.com/di2gmbyng/image/upload/v1732114336/Screenshot_2024-11-20_202207_yc4ivz.png",
    visit: "https://herojunction.vercel.app"
  },
  {
    title: "Collab Roulette",
    description: "Hangout with Twitch Streamers",
    image: "https://res.cloudinary.com/di2gmbyng/image/upload/v1732114560/Screenshot_2024-10-21_132418_djxfxy.png",
    visit: "https://collab-roulette.vercel.app/"
  },
  {
    title: "Pixel Bubble",
    description: "Make your Boring Images to Pixel Art",
    image: "https://res.cloudinary.com/di2gmbyng/image/upload/v1732114789/Screenshot_2024-11-20_202933_nlnb8c.png",
    visit: "https://pixelbubble.vercel.app/"
  },
  {
    title: "Avant Greens",
    description: "Making sustainable fashion the new normal",
    image: "https://res.cloudinary.com/di2gmbyng/image/upload/v1739882448/Screenshot_2025-02-18_181020_k0z0py.png",
    visit: "https://avant-green.com/"
  },
];

const Projects = () => {
  return (
    <section className="py-20">
      <motion.h2 
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <div className="flex mx-3 md:mx-0 flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={50}
            as={Link}
            href={`${project.visit}`}
            target="__blank"
            className="px-4 py-2 bg-black-100 text-white rounded-sm text-sm font-bold"
          >
          Try Now 
          </CardItem>
        </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;