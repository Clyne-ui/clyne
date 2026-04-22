'use client';

import { motion, Variants } from 'framer-motion';

export function LoadingPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8 },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.6 },
    },
  };

  const letters = 'Clyne'.split('');

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="flex flex-col items-center gap-8"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Text with Letter Animation */}
        <div className="flex items-center justify-center gap-2">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: 'easeOut',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Animated Underline */}
        <motion.div
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground font-light tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Software Engineer & Systems Architect
        </motion.p>

        {/* Loading Dots */}
        <motion.div className="flex gap-2 mt-8">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
