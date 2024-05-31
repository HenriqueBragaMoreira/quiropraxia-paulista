'use client';
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
      <SheetTrigger className="lg:hidden">
        <Menu size={32} />
      </SheetTrigger>
      <SheetContent className="bg-[#adc2c6] border-l-0">
        <SheetHeader className="flex mt-6 pb-4 items-center border-b">
          <LogoNavbar />
        </SheetHeader>
        <div className="flex flex-col mt-5 gap-6">
          {routes.map((item) => (
            <a
              className="bg-[#00667F] flex justify-center rounded-lg px-4 py-2 text-lg font-medium"
              key={item.id}
              onClick={() => handleTeste(item.reference)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
