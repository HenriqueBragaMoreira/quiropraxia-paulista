import { Whatsapp } from './icon/brands';

export function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511911050123&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20minha%C2%A0consulta!"
      target="_blank"
      className="fixed bottom-8 right-[20px] md:right-12 bg-white rounded-full p-4 md:p-4 hover:bg-white/60 ease-in duration-200"
      title="Link para o whatsapp da clínica"
    >
      <Whatsapp className="size-8 md:size-10" />
    </a>
  );
}
