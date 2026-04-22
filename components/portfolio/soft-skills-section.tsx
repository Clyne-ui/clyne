'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-constants';

export function SoftSkillsSection() {
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
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="soft-skills" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Soft Skills & Strengths
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-background border border-border hover:border-pink-500/50 transition-colors text-center"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(236, 72, 153, 0.2)',
              }}
            >
              <motion.div
                className="text-4xl mb-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
              >
                {['🎯', '💬', '🧠', '👥', '📊', '👨‍🏫', '🔄'][index]}
              </motion.div>
              <h3 className="font-semibold text-lg">{skill}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 p-8 rounded-lg border-2 border-pink-500/30 bg-pink-500/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-pink-500">My Philosophy</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe that great software is built at the intersection of technical excellence and human collaboration. 
            Every line of code should serve a purpose, every system should be maintainable, and every team member should 
            feel valued and heard. I&apos;m passionate about continuous learning and sharing knowledge with others.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
