'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Who I Am",
    description:
      "I'm Vishal Sharma, a passionate full-stack developer with a keen eye for creating seamless digital experiences. With a background in computer science and years of hands-on experience, I bring ideas to life through code.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://i.ibb.co/jVFG61n/image.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    
  },
  {
    title: "My Expertise",
    description:
      "Specializing in modern web technologies, I excel in React, Next.js, Node.js, and cloud technologies. My approach combines technical proficiency with creative problem-solving to deliver robust and scalable solutions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
  },
  {
    title: "My Mission",
    description:
      "I'm driven by the desire to create technology that makes a positive impact. Whether it's optimizing user experiences or developing innovative features, my goal is to contribute to projects that push the boundaries of what's possible in tech.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8fDA%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
  },
];
 
// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];

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