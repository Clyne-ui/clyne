'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-constants';

export function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education & Certifications
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg border border-border bg-card hover:border-purple-500/50 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747m0-13c5.5 0 10 4.745 10 10.747M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747m0-13c5.5 0 10 4.745 10 10.747" />
                </svg>
              </motion.div>

              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-purple-500 font-semibold mb-2">{edu.school}</p>
              <div className="flex items-center justify-between mb-3 flex-col sm:flex-row gap-2">
                <p className="text-sm text-muted-foreground">{edu.details}</p>
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                  {edu.graduation}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
