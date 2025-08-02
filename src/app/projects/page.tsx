<<<<<<< HEAD
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//     title: "Doctor Appoinment Assistant",
//     description:
//       "Doctor Assistant is an intelligent AI-powered appointment scheduling system designed for clinics and healthcare professionals. Built using the OpenAI Agents SDK, it offers a conversational interface where users (patients) can interact naturally to describe their symptoms, select available doctors, and book appointments.",
//     image: "/images/doctor_agent.png",
//     github:
//       "https://github.com/danii9790/appoinment_agent_with_streamlit/blob/main/main.py",
//     live: "https://appoinmentagents.streamlit.app/",
//   },
//   {
//     title: "Furniro Marketplace",
//     description:
//       "Furniro is an innovative, dynamic furniture e-commerce marketplace developed during Hackathon 3. Built using Next.js 15 with TypeScript, Tailwind CSS, and a headless CMS (Sanity.io), the project delivers a seamless user experience with real-time product management, secure authentication, and modern design.",
//     image: "/images/furniro.png",
//     github:
//       "https://github.com/Danii9790/Hackathon-3-Market-Place-Funiro-Website",
//     live: "https://hackathon-3-market-place-funiro-website.vercel.app/",
//   },
//   {
//     title: "Furniro Dashboard",
//     description:
//       "The Furniro Admin Dashboard is a dedicated admin panel developed to manage orders placed on the Furniro e-commerce platform. Built separately using Next.js 15 with TypeScript, this tool empowers administrators with real-time access to user orders and enables effective order tracking and status management.",
//     image: "/images/furniro_dashboard.png",
//     github:
//       "https://github.com/Danii9790/Admin_Dashboard_for_H3/tree/main/admin-dashboard",
//     live: "https://admin-dashboard-for-h3.vercel.app/sign-in",
//   },
//   // Add more projects here
// ];

// export default function ProjectsPage() {
//   return (
//     <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold mb-12"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           My Projects
//         </motion.h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 min-h-[520px]"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={500}
//                 height={300}
//                 className="w-full h-48 object-cover"
//               />

//               <div className="p-6 flex flex-col justify-between flex-grow">
//                 <div>
//                   <h3 className="text-2xl font-semibold">{project.title}</h3>
//                   <p className="text-gray-300 text-sm mt-2">
//                     {project.description}
//                   </p>
//                 </div>

//                 <div className="flex gap-4 mt-6">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-sm text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
//                   >
//                     <FaGithub /> GitHub
//                   </a>
//                   {project.live && (
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
//                     >
//                       <FaExternalLinkAlt /> Live
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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

=======
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Doctor Appoinment Assistant",
    description:
      "Doctor Assistant is an intelligent AI-powered appointment scheduling system designed for clinics and healthcare professionals. Built using the OpenAI Agents SDK, it offers a conversational interface where users (patients) can interact naturally to describe their symptoms, select available doctors, and book appointments.",
    image: "/images/doctor_agent.png",
    github:
      "https://github.com/danii9790/appoinment_agent_with_streamlit/blob/main/main.py",
    live: "https://appoinmentagents.streamlit.app/",
  },
  {
    title: "Furniro Marketplace",
    description:
      "Furniro is an innovative, dynamic furniture e-commerce marketplace developed during Hackathon 3. Built using Next.js 15 with TypeScript, Tailwind CSS, and a headless CMS (Sanity.io), the project delivers a seamless user experience with real-time product management, secure authentication, and modern design.",
    image: "/images/furniro.png",
    github:
      "https://github.com/Danii9790/Hackathon-3-Market-Place-Funiro-Website",
    live: "https://hackathon-3-market-place-funiro-website.vercel.app/",
  },
  {
    title: "Furniro Dashboard",
    description:
      "The Furniro Admin Dashboard is a dedicated admin panel developed to manage orders placed on the Furniro e-commerce platform. Built separately using Next.js 15 with TypeScript, this tool empowers administrators with real-time access to user orders and enables effective order tracking and status management.",
    image: "/images/furniro_dashboard.png",
    github:
      "https://github.com/Danii9790/Admin_Dashboard_for_H3/tree/main/admin-dashboard",
    live: "https://admin-dashboard-for-h3.vercel.app/sign-in",
  },
  // Add more projects here
];

export default function ProjectsPage() {
>>>>>>> 11c6738cf61fe75335d33ea1996bf60784e6a630
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
<<<<<<< HEAD
              key={project._id}
=======
              key={index}
>>>>>>> 11c6738cf61fe75335d33ea1996bf60784e6a630
              className="flex flex-col bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 min-h-[520px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
<<<<<<< HEAD
                src={project.imageUrl}
=======
                src={project.image}
>>>>>>> 11c6738cf61fe75335d33ea1996bf60784e6a630
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
