"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-24 px-6 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Profile Image with Glow */}
        <motion.div
          variants={fadeUp}
          className="relative w-44 h-44 mb-8 group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-xl opacity-40 group-hover:opacity-70 transition duration-300"></div>
          <Image
            src="/images/dani.png"
            alt="Profile_picture"
            fill
            className="object-cover rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Name with Gradient Animation */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tight"
        >
          <span className="block text-gray-300">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Muhammad Daniyal
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Full Stack Developer | Next.js, AI Automation, Cloud | I Help Companies Build Autonomous Web Solutions That Drive 2x Faster User Actions
        </motion.p>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          className="flex gap-6 mt-7 text-2xl"
        >
          <a
            href="https://www.linkedin.com/in/daniyalxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=daniyalashraf9790@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 hover:scale-110 transition duration-300"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/Danii9790"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          variants={fadeUp}
          href="/projects"
          className="mt-10 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          View My Projects
        </motion.a>
      </motion.div>

      {/* Animated Gradient Keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
