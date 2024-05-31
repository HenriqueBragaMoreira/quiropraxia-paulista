import { LogoNavbar } from '../icon/logoNavbar';
import { DesktopNavbar } from './desktopNavbar';
import { MobileNavbar } from './mobileNavbar';

export function NavbarContainer() {
  return (
    <div className="flex justify-around items-center py-2 border-b">
      <div className="flex gap-10 items-center">
        <LogoNavbar />
      </div>
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
