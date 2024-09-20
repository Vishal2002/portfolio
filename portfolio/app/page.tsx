"use client"
import About from '@/components/ui/About'
import Contact from '@/components/ui/Contact'
import Hero from '@/components/ui/Hero'
import Projects from '@/components/ui/Projects'
import React,{useRef} from 'react'
import { FloatingDock } from "@/components/ui/floating-dock";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";
import Skills from '@/components/ui/Skills'
import { motion } from 'framer-motion'

const links = [
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Vishal2002",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/vishal-sharma-b330aa1ba/",
  },
  {
    title: "Resume",
    icon: (
      <PiReadCvLogoDuotone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://drive.google.com/file/d/1Y6Z6ayOBmxmHDM5VxdRKRCyUZNP60ZJ_/view?usp=sharing",
  },
  {
    title: "Hashnode",
    icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=HnB8zGOh5xgd&format=png&color=000000"
        width={24}
        height={24}
        alt="Hashnode"
        className="text-neutral-500 dark:text-neutral-300"
      />
    ),
    href: "https://codreline.hashnode.dev/",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/sharma_188",
  },
];

const Page = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref:any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='bg-black-100 min-h-screen'>
      <Hero 
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.div>
      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Projects />
      </motion.div>
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>
      <div className="flex items-center justify-center w-full mb-5">
        <FloatingDock
          mobileClassName="bg-black translate-y-10"
          items={links}
        />
      </div>
    </main>
  )
}

export default Page