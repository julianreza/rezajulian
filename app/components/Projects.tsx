'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tech: ['React', 'GraphQL', 'AWS'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Analytics Platform',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tech: ['Vue.js', 'Python', 'Docker'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Real-time Chat App',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    tech: ['React', 'Socket.io', 'Redis'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Blockchain Explorer',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    tech: ['Next.js', 'Web3', 'Ethereum'],
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl font-bold text-white">{project.id}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 rounded-lg bg-gradient-to-r ${project.color} text-white font-semibold`}
              >
                View Project
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

