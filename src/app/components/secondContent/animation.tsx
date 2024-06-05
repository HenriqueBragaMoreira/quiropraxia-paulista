'use client';

import { motion } from 'framer-motion';

export function WhileInViewAnimation({ children }: WithChildren) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      transition={{ duration: 0.75, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export function WhileImageInViewAnimation({ children }: WithChildren) {
  return (
    <motion.div
      className="flex flex-col gap-10 xs:grid xs:grid-cols-2 md:flex md:gap-0 md:flex-row md:justify-between items-center md:w-full"
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      transition={{ duration: 0.75, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
