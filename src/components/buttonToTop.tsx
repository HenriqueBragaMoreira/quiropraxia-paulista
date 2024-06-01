'use client';
import { ChevronUpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ButtonToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 800) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-[116px] right-[16px] md:right-12 bg-white rounded-full p-4 hover:bg-white/60 ease-in duration-200 transition-opacity ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={() => scrollToTop()}
    >
      <ChevronUpCircle size={40} color="black" />
    </button>
  );
}
