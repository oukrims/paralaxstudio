'use client';

import React, { type JSX } from 'react';
import { motion, HTMLMotionProps, type Variant, type Variants as MotionVariants } from 'motion/react';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right';

const containerVariants: MotionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const generateVariants = (direction: Direction): MotionVariants => {
  const axis = direction === 'left' || direction === 'right' ? 'X' : 'Y';
  const value = direction === 'right' || direction === 'down' ? 100 : -100;

  const hidden: Variant = {
    filter: 'blur(10px)',
    opacity: 0,
  };
  const visible: Variant = {
    filter: 'blur(0px)',
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  };

  if (axis === 'X') {
    hidden.translateX = value;
    visible.translateX = 0;
  } else {
    hidden.translateY = value;
    visible.translateY = 0;
  }

  return { hidden, visible };
};

const defaultViewport = { amount: 0.3, margin: '0px 0px 0px 0px' };

const TextAnimation = ({
  as = 'h1',
  text,
  classname = '',
  viewport = defaultViewport,
  variants,
  direction = 'down',
  letterAnime = false,
  lineAnime = false,
}: {
  text: string;
  classname?: string;
  as?: keyof JSX.IntrinsicElements;
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  variants?: MotionVariants;
  direction?: Direction;
  letterAnime?: boolean;
  lineAnime?: boolean;
}) => {
  const generatedVariants = generateVariants(direction);
  const baseVariants: MotionVariants = {
    ...generatedVariants,
    ...(variants ?? {}),
  };
  const modifiedVariants: MotionVariants = {
    hidden: baseVariants.hidden,
    visible: baseVariants.visible,
  };

  const MotionComponent = motion[
    as as keyof typeof motion
  ] as React.ComponentType<HTMLMotionProps<any>>;

  return (
    <MotionComponent
      whileInView="visible"
      initial="hidden"
      variants={containerVariants}
      viewport={viewport}
      className={cn(
        `inline-block dark:text-white text-black uppercase`,
        classname
      )}
    >
      {lineAnime ? (
        <motion.span className={`inline-block`} variants={modifiedVariants}>
          {text}
        </motion.span>
      ) : (
        <>
          {text.split(' ').map((word: string, index: number) => (
            <motion.span
              key={index}
              className={`inline-block`}
              variants={letterAnime === false ? modifiedVariants : {}}
            >
              {letterAnime ? (
                <>
                  {word.split('').map((letter: string, letterIndex: number) => (
                    <motion.span
                      key={letterIndex}
                      className={`inline-block`}
                      variants={modifiedVariants}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  &nbsp;
                </>
              ) : (
                <>{word}&nbsp;</>
              )}
            </motion.span>
          ))}
        </>
      )}
    </MotionComponent>
  );
};

export default TextAnimation;
