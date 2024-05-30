import { routes } from '@/utils/routes';
import Link from 'next/link';
import { LogoNavbar } from './icon/logoNavbar';

export function Navbar() {
  return (
    <div className="flex justify-around items-center py-2 border-b">
      <div className="flex gap-10 items-center">
        <LogoNavbar />
      </div>
      <div className="flex gap-20">
        {routes.map((item) => (
          <Link
            className="text-lg font-medium hover:text-[#00667F] hover:underline duration-300"
            key={item.id}
            href={item.reference}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
