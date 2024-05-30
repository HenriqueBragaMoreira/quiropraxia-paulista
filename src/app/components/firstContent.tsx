import {
  LogoAnimation,
  MainTextAnimation,
  NavbarAnimation,
  NetworkAnimation,
} from '@/components/animation';
import { Facebook, Instagram, Tiktok, Youtube } from '@/components/icon/brands/index';
import { Logo } from '@/components/icon/logo';
import { Navbar } from '@/components/navbar';
import { MapPin } from 'lucide-react';

export function FirstContent() {
  return (
    <div id="first-content" className="flex flex-col h-screen">
      <NavbarAnimation>
        <Navbar />
      </NavbarAnimation>
      <div className="flex-1 flex justify-around items-center px-10">
        <MainTextAnimation>
          <div className="flex flex-col gap-10">
            <h1 className="text-4xl font-bold max-w-[40rem]">
              Descubra o conforto e a excelência da nossa clínica de quiropraxia!
            </h1>
            <div className="flex flex-col text-lg gap-1">
              <span className="max-w-xl">
                Abrace o bem-estar e venha desfrutar de tratamentos personalizados que revitalizam
                corpo e mente.
              </span>
              <span className="max-w-lg">
                Com duas unidades localizadas em São Paulo, estamos aqui para cuidar de você.
              </span>
            </div>
            <div className="flex gap-10">
              <a
                href="https://wa.me/5511911050123?text=Olá,%20vim%20pelo%20site%20e%20quero%20marcar%20uma%20consulta!"
                target="_blank"
                className="flex gap-2 bg-[#00667F] px-4 py-2 rounded-lg items-center cursor-pointer hover:bg-[#00667F]/70">
                <MapPin />
                <h2 className="text-lg font-bold">Av. Paulista, 326</h2>
              </a>
              <a
                href=""
                target="_blank"
                className="flex gap-2 bg-[#00667F] px-4 py-2 rounded-lg items-center cursor-pointer hover:bg-[#00667F]/70">
                <MapPin />
                <h2 className="text-lg font-bold">Rua Pais Leme, 215</h2>
              </a>
            </div>
          </div>
        </MainTextAnimation>

        <div className="flex flex-col items-center gap-8">
          <LogoAnimation>
            <Logo />
          </LogoAnimation>
          <NetworkAnimation>
            <div className="flex gap-8">
              <a
                href="https://www.instagram.com/quiropraxiapaulista/"
                className="transition duration-300 ease-in-out hover:scale-[1.2]"
                target="_blank">
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/quiropraxiapaulista/"
                className="transition duration-300 ease-in-out hover:scale-[1.2]"
                target="_blank">
                <Facebook />
              </a>
              <a
                href="https://www.youtube.com/@quiropraxiapaulista"
                className="transition duration-300 ease-in-out hover:scale-[1.2]"
                target="_blank">
                <Youtube />
              </a>
              <a
                href="https://www.tiktok.com/@quiropraxiapaulista?lang=pt-BR"
                className="transition duration-300 ease-in-out hover:scale-[1.2]"
                target="_blank">
                <Tiktok />
              </a>
            </div>
          </NetworkAnimation>
        </div>
      </div>
    </div>
  );
}
