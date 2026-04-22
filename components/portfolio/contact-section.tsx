'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { portfolioData } from '@/lib/portfolio-constants';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if Firebase is configured
    if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'YOUR_API_KEY' || !db) {
       console.warn('Firebase is not yet configured. Please update lib/firebase.ts with your credentials.');
       // For now, we'll simulate a failure so the user knows they need to finish setup
       setSubmitStatus('error');
       setIsSubmitting(false);
       return;
    }

    try {
      // 1. Save to Firestore (Backup Database)
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // 2. Send Email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        throw new Error('API delivery failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question
                or just want to say hi, feel free to get in touch!
              </p>
            </div>

            <motion.a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-4 p-4 rounded-lg border border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60 hover:bg-blue-500/10 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">{portfolioData.email}</p>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/254110460250?text=Hello%20Clyne%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-green-500/30 bg-green-500/5 hover:border-green-500/60 hover:bg-green-500/10 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-semibold">+254 110 460 250</p>
              </div>
            </motion.a>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Connect with me on social platforms</p>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', icon: '🔗', url: '#' },
                  { name: 'LinkedIn', icon: '💼', url: '#' },
                  { name: 'Twitter', icon: '𝕏', url: '#' },
                ].map(social => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 rounded-lg bg-muted border border-border hover:border-blue-500/50 flex items-center justify-center text-lg hover:bg-blue-500/10 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={itemVariants}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
                placeholder="Your name"
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
                placeholder="your@email.com"
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all resize-none"
                placeholder="Your message..."
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white font-semibold transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-500"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500"
              >
                Failed to send message. Please try again or email me directly.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
