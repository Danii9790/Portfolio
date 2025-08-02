"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Project {
  imageUrl: string | StaticImport;
  _id: string;
  title: string;
  description: string;
  image: any;
  github: string;
  live: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await client.fetch(`
        *[_type == "project"]{
          _id,
          title,
          description,
          github,
          live,
          "imageUrl": image.asset->url
        }
      `);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              className="flex flex-col bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 min-h-[520px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
