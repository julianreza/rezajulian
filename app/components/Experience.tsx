'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    id: 1,
    title: 'Senior Fullstack Developer',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Fullstack Developer',
    company: 'Startup XYZ',
    period: '2020 - 2022',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-full md:w-1/3 p-6 rounded-2xl bg-gradient-to-r ${exp.color} text-white shadow-xl`}>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-lg opacity-90 mb-2">{exp.company}</p>
                  <p className="text-sm opacity-75">{exp.period}</p>
                </div>
                <div className="w-full md:w-2/3 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-purple-500">
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-0 md:left-1/3 top-full w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent transform translate-x-6 md:translate-x-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

