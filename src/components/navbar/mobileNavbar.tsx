'use client';
import { Facebook, Instagram, Tiktok, Youtube } from '@/components/icon/brands/index';
import { routes } from '@/utils/routes';
import { Menu } from 'lucide-react';
import { LogoNavbar } from '../icon/logoNavbar';
import { Sheet, SheetContent, SheetHeader, SheetTrigger, handleCloseSheet } from '../ui/sheet';

export function MobileNavbar() {
  function handleTeste(reference: string) {
    handleCloseSheet();
    setTimeout(() => {
      window.location.hash = reference;
    }, 300);
  }

  return (
    <Sheet>
      <SheetTrigger title="Menu hambúrguer" className="lg:hidden">
        <Menu size={32} />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between bg-[#adc2c6] border-l-0">
        <div>
          <SheetHeader className="flex mt-6 pb-4 items-center border-b">
            <LogoNavbar />
          </SheetHeader>
          <div className="flex flex-col gap-6 border-b py-5">
            {routes.map((item) => (
              <a
                className="bg-[#00667F] flex justify-center rounded-lg px-4 py-2 font-semibold"
                key={item.id}
                onClick={() => handleTeste(item.reference)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              title="Link para o instagram da Quiropraxia Paulista"
              href="https://www.instagram.com/quiropraxiapaulista/"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              title="Link para o facebook da Quiropraxia Paulista"
              href="https://www.facebook.com/quiropraxiapaulista/"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              title="Link para o Youtube da Quiropraxia Paulista"
              href="https://www.youtube.com/@quiropraxiapaulista"
              target="_blank"
            >
              <Youtube />
            </a>
            <a
              title="Link para o Tiktok da Quiropraxia Paulista"
              href="https://www.tiktok.com/@quiropraxiapaulista?lang=pt-BR"
              target="_blank"
            >
              <Tiktok />
            </a>
          </div>
          <div className="flex flex-col items-center border-t pt-4">
            <span className="text-gray-200 text-xs">
              Copyright © 2019-2024 Quiropraxia Paulista.
            </span>
            <span className="text-gray-200 text-xs">Todos os direitos reservados.</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
