import { LogoNavbar } from '../icon/logoNavbar';
import { DesktopNavbar } from './desktopNavbar';
import { MobileNavbar } from './mobileNavbar';

export function NavbarContainer() {
  return (
    <div className="flex justify-around items-center py-2 border-b bg-[#ADC2C6]">
      <a
        href="#first-content"
        className="flex gap-10 items-center"
        title="Logo da clinica Quiropraxia Paulista"
      >
        <LogoNavbar />
      </a>
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
