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
      className={`fixed bottom-[104px] right-[20px] md:bottom-[116px] md:right-12 bg-white rounded-full p-4 hover:bg-white/60 ease-in duration-200 transition-opacity ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      title="Botão para o topo da página"
      onClick={() => scrollToTop()}
    >
      <ChevronUpCircle className="size-8 md:size-10" color="black" />
    </button>
  );
}
