"use client";
import { motion } from "framer-motion";
import { Bot, Zap, Plug, Layout, Server, Globe } from "lucide-react";
const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Building intelligent conversational agents",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamlining workflows with n8n",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Connecting systems seamlessly",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Designing responsive UIs with Next.js & Tailwind CSS",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building secure and scalable APIs",
    gradient: "from-indigo-500 to-blue-700",
  },
  {
    icon: Globe,
    title: "Hosting & Deployment",
    description: "Deploying modern apps using Vercel & Netlify",
    gradient: "from-pink-500 to-yellow-500",
  },
];  
  
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full page-transition">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            What I <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group glass rounded-2xl p-8 border border-white/10 card-hover"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
