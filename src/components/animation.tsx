'use client';

import { motion } from 'framer-motion';

export function NavbarAnimation({ children }: WithChildren) {
  return (
    <motion.div
      initial={{ y: '-16px', opacity: '0%' }}
      animate={{ y: '0px', opacity: '100%' }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed top-0 w-full z-50"
    >
      {children}
    </motion.div>
  );
}

export function MainTextAnimation({ children }: WithChildren) {
  return (
    <motion.div
      initial={{ y: '-16px', opacity: '0%' }}
      animate={{ y: '0px', opacity: '100%' }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export function LogoAnimation({ children }: WithChildren) {
  return (
    <motion.div
      initial={{ x: '-400px', opacity: 0 }}
      animate={{ x: '0', opacity: 1 }}
      transition={{
        opacity: { duration: 1 },
        x: { delay: 0.5, duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}

export function NetworkAnimation({ children }: WithChildren) {
  return (
    <motion.div
      initial={{ y: '-16px', opacity: '0%' }}
      animate={{ y: '0px', opacity: '100%' }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

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
