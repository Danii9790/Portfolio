"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="relative w-40 h-40 mb-6">
          <Image
            src="/images/dani.png"
            alt="Profile_picture"
            fill
            className="object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <motion.h2
  className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight"
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <span className="block text-gray-300">Hi, I'm</span>
  <span className="block text-blue-400">Muhammad Daniyal</span>
</motion.h2>


        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Exploring Agentic AI | Python & Next.js Developer
          <br /> Building Intelligent & Autonomous Web Experiences
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 mt-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <a
            href="www.linkedin.com/in/muhammad-daniyal-a626812ba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:daniyalashraf9790@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition duration-200"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Danii9790"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="/projects"
          className="mt-10 inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          View My Projects
        </motion.a>
      </div>
    </section>
  );
}
