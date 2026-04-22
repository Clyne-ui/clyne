'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-constants';

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = Object.entries(portfolioData.skills);

  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Arsenal
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map(([category, skills]) => (
            <motion.div
              key={category}
              className="p-6 rounded-lg border border-border bg-background"
              variants={itemVariants}
              whileHover={{ borderColor: 'rgb(59, 130, 246)', boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)' }}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize text-blue-500">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium border border-blue-500/30 hover:border-blue-500/60 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 p-6 rounded-lg border border-purple-500/30 bg-purple-500/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-500">Methodologies & Practices</h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.methodologies.map((item) => (
              <motion.div
                key={item}
                className="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-500 text-sm font-medium border border-purple-500/30 hover:border-purple-500/60 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
