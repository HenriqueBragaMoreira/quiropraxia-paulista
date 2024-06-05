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
