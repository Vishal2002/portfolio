'use client'

import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 70 },
  // Add more skills as needed
];

const SkillBar = ({ skill, level, index }:{skill:string, level:number, index:number}) => (
  <motion.div 
    className="mb-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex justify-between items-center mb-1">
      <span className="text-base font-medium text-blue-700 dark:text-white">{skill}</span>
      <span className="text-sm font-medium text-blue-700 dark:text-white">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <motion.div 
        className="bg-blue-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <SkillBar key={index} skill={skill.name} level={skill.level} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;