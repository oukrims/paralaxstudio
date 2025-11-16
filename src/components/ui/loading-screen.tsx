'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  isLoading?: boolean;
  onComplete?: () => void;
}

export function LoadingScreen({ isLoading = true, onComplete }: LoadingScreenProps) {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShow(false);
        onComplete?.();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10003] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            {/* Logo with Fill Effect */}
            <div className="relative w-24 md:w-32" style={{ aspectRatio: '128/181' }}>
              {/* Background Logo (dimmed) */}
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/logo.svg"
                  alt="Parallax Studio"
                  width={128}
                  height={181}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Filled Logo (animated reveal from bottom) */}
              <motion.div
                initial={{ height: '0%' }}
                animate={{
                  height: ['0%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'reverse',
                }}
                className="absolute bottom-0 left-0 right-0 overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0">
                  <Image
                    src="/logo.svg"
                    alt="Parallax Studio"
                    width={128}
                    height={181}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Parallax Studio Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <h2 className="text-sm tracking-[0.4em] text-white uppercase font-medium">
                Parallax Studio
              </h2>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                  className="w-2 h-2 rounded-full bg-white"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-neutral-800 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
