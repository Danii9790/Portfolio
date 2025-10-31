"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "daniyalashraf9790@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=daniyalashraf9790@gmail.com",
    color: "text-red-400",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "daniyalxdev",
    href: "https://www.linkedin.com/in/daniyalxdev",
    color: "text-blue-400",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Danii9790",
    href: "https://github.com/Danii9790",
    color: "text-gray-300",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full page-transition">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Let&apos;s connect! Whether you have a project in mind or just want to chat about AI and technology, 
            I&apos;d love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") || contact.href.startsWith("mailto") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (contact.href.startsWith("mailto")) {
                    window.location.href = contact.href;
                  }
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group glass rounded-2xl p-8 border border-white/10 card-hover text-center cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${contact.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {contact.label}
                </h3>
                <p className={`text-gray-300 group-hover:${contact.color} transition-colors`}>
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="mailto:daniyalashraf9790@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            Send Me an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
