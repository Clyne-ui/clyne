'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-constants';

export function HobbiesSection() {
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
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="hobbies" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Interests & Hobbies
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-lg border border-border bg-card hover:border-cyan-500/50 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <motion.div
                    className="text-xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {['🌐', '✍️', '⚡', '🎮'][index]}
                  </motion.div>
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">
                    {hobby.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Beyond code, I&apos;m passionate about exploring new technologies, contributing to open-source communities, 
            and staying updated with industry trends. I believe in maintaining a balance between technical growth and personal interests.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
