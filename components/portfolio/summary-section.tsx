'use client';

import { motion, Variants } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-constants';

export function SummarySection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.summary}
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Technical Excellence</h3>
                  <p className="text-muted-foreground">Committed to writing clean, maintainable, and efficient code.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Problem Solving</h3>
                  <p className="text-muted-foreground">Thrives on tackling complex architectural challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Team Collaboration</h3>
                  <p className="text-muted-foreground">Values open communication and knowledge sharing.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            <motion.a
              href="#projects"
              className="p-6 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-colors block cursor-pointer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl font-bold text-blue-500 mb-2">10+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </motion.a>
            <motion.div
              className="p-6 rounded-lg bg-card border border-border hover:border-purple-500/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-purple-500 mb-2">3+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </motion.div>
            <motion.div
              className="p-6 rounded-lg bg-card border border-border hover:border-pink-500/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-pink-500 mb-2">15+</div>
              <p className="text-muted-foreground">Tech Stack</p>
            </motion.div>
            <motion.div
              className="p-6 rounded-lg bg-card border border-border hover:border-cyan-500/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-cyan-500 mb-2">100%</div>
              <p className="text-muted-foreground">Dedication</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
