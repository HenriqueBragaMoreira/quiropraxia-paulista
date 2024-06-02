import {
  LogoAnimation,
  MainTextAnimation,
  NavbarAnimation,
  NetworkAnimation,
} from '@/components/animation';
import { Facebook, Instagram, Tiktok, Youtube } from '@/components/icon/brands/index';
import { Logo } from '@/components/icon/logo';
import { NavbarContainer } from '@/components/navbar/navbarContainer';
import { MapPin } from 'lucide-react';

export function FirstContent() {
  return (
    <div
      id="first-content"
      className="flex flex-col [@media(min-height:840px)]:h-screen md:h-screen"
    >
      <div className="flex-1 flex flex-col lg:flex-row justify-around items-center px-10 gap-10 md:gap-0 pt-5 md:p-0">
        <NavbarAnimation>
          <NavbarContainer />
        </NavbarAnimation>
        <MainTextAnimation>
          <div className="flex flex-col gap-4 lg:gap-6 mt-[77px]">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold max-w-[35rem]">
                Descubra o conforto e a excelência da nossa clínica de quiropraxia!
              </h1>
            </div>
            <div className="flex flex-col text-lg">
              <h2 className="max-w-xl">
                Abrace o bem-estar e venha desfrutar de tratamentos personalizados que revitalizam
                corpo e mente.
              </h2>
              <h2 className="max-w-lg">
                Com duas unidades localizadas em São Paulo, estamos aqui para cuidar de você.
              </h2>
            </div>
            <div className="flex flex-col gap-4 3xl:flex-row xl:flex-row md:flex-row 3xl:gap-10 xl:gap-10 md:gap-10">
              <a
                href="https://www.google.com/maps/place/Quiropraxia+Paulista/@-23.568756,-46.6466063,15z/data=!4m2!3m1!1s0x0:0xe8978281b9c690cb?sa=X&ved=1t:2428&ictx=111&cshid=1717100540001437"
                target="_blank"
                className="flex gap-2 bg-[#00667F] px-4 py-2 rounded-lg items-center cursor-pointer hover:bg-[#00667F]/70 duration-500 shadow-2xl"
              >
                <MapPin />
                <h2 className="text-lg font-bold">Av. Paulista, 326</h2>
              </a>
              <a
                href="https://www.google.com/maps/place/Quiropraxia+Paulista+-+Unidade+Pinheiros/@-23.5685772,-46.6985022,15z/data=!4m6!3m5!1s0x94ce57ce8381b367:0x1c57487f9bc0876c!8m2!3d-23.5685772!4d-46.6985022!16s%2Fg%2F11v05xv1gj?entry=ttu"
                target="_blank"
                className="flex gap-2 bg-[#00667F] px-4 py-2 rounded-lg items-center cursor-pointer hover:bg-[#00667F]/70 duration-500 shadow-2xl"
              >
                <MapPin />
                <h2 className="text-lg font-bold">Rua Pais Leme, 215</h2>
              </a>
            </div>
          </div>
        </MainTextAnimation>

        <div className="flex flex-col items-center gap-8">
          <LogoAnimation>
            <Logo className="xl:w-[565px] md:w-[450px]" />
          </LogoAnimation>
          <NetworkAnimation>
            <div className="flex gap-8">
              <a
                title="Link para o instagram da Quiropraxia Paulista"
                href="https://www.instagram.com/quiropraxiapaulista/"
                className="transition duration-300 ease-in-out hover:scale-[1.2]"
                target="_blank"
              >
                <Instagram />
              </a>
              <a
                title="Link para o facebook da Quiropraxia Paulista"
                href="https://www.facebook.com/quiropraxiapaulista/"
                className="transition duration-300 ease-in-out hover:scale-[1.2]"
                target="_blank"
              >
                <Facebook />
              </a>
              <a
                title="Link para o Youtube da Quiropraxia Paulista"
                href="https://www.youtube.com/@quiropraxiapaulista"
                className="transition duration-300 ease-in-out hover:scale-[1.2]"
                target="_blank"
              >
                <Youtube />
              </a>
              <a
                title="Link para o Tiktok da Quiropraxia Paulista"
                href="https://www.tiktok.com/@quiropraxiapaulista?lang=pt-BR"
                className="transition duration-300 ease-in-out hover:scale-[1.2]"
                target="_blank"
              >
                <Tiktok />
              </a>
            </div>
          </NetworkAnimation>
        </div>
      </div>
    </div>
  );
}
