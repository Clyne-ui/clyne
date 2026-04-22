'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 py-8">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div className="flex items-center justify-center gap-2" whileHover={{ scale: 1.05 }}>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Clyne
          </span>
        </motion.div>

        <p className="text-muted-foreground">
          Full Stack Software Engineer & Systems Architect
        </p>

        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          © {currentYear} Clyne Wafula. All rights reserved. Built with Next.js, React, and Framer Motion.
        </motion.p>
      </motion.div>
    </footer>
  );
}
