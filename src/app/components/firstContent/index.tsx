import { Facebook, Instagram, Tiktok, Youtube } from '@/components/icon/brands/index';
import { Logo } from '@/components/icon/logo';
import { NavbarContainer } from '@/components/navbar/navbarContainer';
import { MapPin } from 'lucide-react';
import { LogoAnimation, MainTextAnimation, NavbarAnimation, NetworkAnimation } from './animation';

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
                href="https://api.whatsapp.com/send?phone=5511911050123&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20consulta%20na%20Unidade%20Paulista!"
                target="_blank"
                className="flex gap-2 bg-[#00667F] px-4 py-2 rounded-lg items-center cursor-pointer hover:bg-[#00667F]/70 duration-500 shadow-2xl"
              >
                <MapPin />
                <h2 className="text-lg max-w-48 font-bold">
                  Agende na Paulista - Av. Paulista, 326
                </h2>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5511911050123&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20consulta%20na%20Unidade%20Pinheiros!"
                target="_blank"
                className="flex gap-2 bg-[#00667F] px-4 py-2 rounded-lg items-center cursor-pointer hover:bg-[#00667F]/70 duration-500 shadow-2xl"
              >
                <MapPin />
                <h2 className="text-lg max-w-52 font-bold">
                  Agende em Pinheiros - Rua Pais Leme, 215
                </h2>
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
