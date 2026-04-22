'use client';

import { motion, Variants } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-constants';

export function ExperienceSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-8"
              variants={itemVariants}
            >
              {/* Timeline line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-0 top-8 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-[-20px] top-2 w-10 h-10 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
              </div>

              <motion.div
                className="p-6 rounded-lg bg-background border border-border hover:border-blue-500/50 transition-colors"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start justify-between mb-3 flex-col sm:flex-row gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-blue-500 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
