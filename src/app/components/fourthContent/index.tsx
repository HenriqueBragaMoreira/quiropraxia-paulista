import { Facebook, Instagram, Tiktok, Whatsapp, Youtube } from '@/components/icon/brands';

export function FourthContent() {
  return (
    <div
      id="fifth-content"
      className="3xl:h-screen [@media(min-height:935px)]:h-screen flex flex-col gap-4 bg-[#154359] pb-10 pt-20 md:pt-[88px]"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center">Contato</h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 items-center justify-around">
        <div className="flex flex-col gap-6 bg-white py-4 px-6 sm:py-6 sm:px-20 rounded-lg">
          <h2 className="text-4xl text-black font-semibold">Entre em contato</h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <Instagram />
              <a
                href="https://www.instagram.com/quiropraxiapaulista/"
                target="_blank"
                className="text-black font-semibold hover:text-black/70 hover:underline cursor-pointer"
              >
                @quiropraxiapaulista
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Tiktok />
              <a
                href="https://www.tiktok.com/@quiropraxiapaulista?lang=pt-BR"
                target="_blank"
                className="text-black font-semibold hover:text-black/70 hover:underline cursor-pointer"
              >
                @quiropraxiapaulista
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Facebook />
              <a
                href="https://www.facebook.com/quiropraxiapaulista/"
                target="_blank"
                className="text-black font-semibold hover:text-black/70 hover:underline cursor-pointer"
              >
                Quiropraxia Paulista
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Youtube />
              <a
                href="https://www.youtube.com/@quiropraxiapaulista"
                target="_blank"
                className="text-black font-semibold hover:text-black/70 hover:underline cursor-pointer"
              >
                Quiropraxia Paulista
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Whatsapp className="size-8" />
              <a
                href="http://wa.link/r95n9s"
                target="_blank"
                className="text-black font-semibold hover:text-black/70 hover:underline cursor-pointer"
              >
                +55 (11) 91105-0123
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14627.965193739386!2d-46.6466063!3d-23.568756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ed9cca6573%3A0xe8978281b9c690cb!2sQuiropraxia%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1718017077986!5m2!1spt-BR!2sbr"
            className="h-80 md:h-96 md:w-[500px] rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14627.98510747553!2d-46.6985022!3d-23.5685772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57ce8381b367%3A0x1c57487f9bc0876c!2sQuiropraxia%20Paulista%20-%20Unidade%20Pinheiros!5e0!3m2!1spt-BR!2sbr!4v1718017399893!5m2!1spt-BR!2sbr"
            className="h-80 w-[350px] md:h-96 md:w-[500px] rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
