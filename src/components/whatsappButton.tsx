import { Whatsapp } from './icon/brands';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export function WhatsappButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="fixed bottom-8 right-[20px] md:right-12 bg-white rounded-full p-4 md:p-4 hover:bg-white/60 ease-in duration-200"
          title="Link para o whatsapp da clínica"
        >
          <Whatsapp className="size-8 md:size-10" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <a
          href="https://wa.me/5511911050123?text=Olá,%20vim%20pelo%20site%20e%20quero%20marcar%20uma%20consulta!"
          target="_blank"
          className="flex items-center gap-2 hover:bg-black/5 p-2"
        >
          <Whatsapp width={16} height={16} />
          Clinica Paulista
        </a>
        <a
          href="https://wa.me/5511953000680?text=Olá,%20vim%20pelo%20site%20e%20quero%20marcar%20uma%20consulta!"
          target="_blank"
          className="flex items-center gap-2 hover:bg-black/5 p-2"
        >
          <Whatsapp width={16} height={16} />
          Clinica Pinheiros
        </a>
      </PopoverContent>
    </Popover>
  );
}
