import { routes } from '@/utils/routes';
import Link from 'next/link';

export function DesktopNavbar() {
  return (
    <div className="hidden lg:flex gap-20">
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
  );
}
