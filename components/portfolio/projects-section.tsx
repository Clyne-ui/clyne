'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-constants';

export function ProjectsSection() {
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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Key Projects
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg border border-border bg-card hover:border-blue-500/50 transition-colors group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4 flex-col sm:flex-row gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-blue-500 mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium border border-blue-500/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-purple-500 mb-2">Key Achievements</p>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-purple-500 mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.a
                href={project.link}
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors font-semibold"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
