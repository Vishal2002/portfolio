//@ts-nocheck

'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { TextRevealCard } from "./text-reveal-cards";

import { FaDocker, FaNodeJs, FaReact, FaAws } from 'react-icons/fa';
import { SiRedis, SiPostgresql, SiMongodb, SiNextdotjs, SiKubernetes, SiExpress } from 'react-icons/si';

const skillsData = [
  { name: 'Docker', icon: FaDocker },
  { name: 'Redis', icon: SiRedis },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'React', icon: FaReact },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'AWS', icon: FaAws },
  { name: 'Express', icon: SiExpress },
];

const SkillCard = ({ skill, icon: Icon }) => (
  <TextRevealCard
    text={skill}
    revealText={skill}
    className="w-full h-40"
  >
    <div className="flex flex-col items-center justify-center h-full">
      <Icon className="text-4xl mb-2" />
      <span className="text-sm">{skill}</span>
    </div>
  </TextRevealCard>
  
);

const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-extrabold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technology
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard skill={skill.name} icon={skill.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;