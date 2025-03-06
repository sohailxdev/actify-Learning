'use client';
 
import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';
export function GradualSpacing2({ text = '' }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-wrap ">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-xl sm:text-2xl font-bold tracking-tighter lg:text-4xl md:leading-[4rem]"
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}