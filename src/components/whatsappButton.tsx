import { Whatsapp } from './icon/brands';

export function WhatsappButton() {
  return (
    <a
      href="http://wa.link/r95n9s"
      target="_blank"
      className="fixed bottom-8 right-[20px] md:right-12 bg-white rounded-full p-4 md:p-4 hover:bg-white/60 ease-in duration-200"
      title="Link para o whatsapp da clínica"
    >
      <Whatsapp className="size-8 md:size-10" />
    </a>
  );
}
