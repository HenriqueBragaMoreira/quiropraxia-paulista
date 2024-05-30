import { Whatsapp } from './icon/brands';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function WhatsappButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="fixed bottom-8 right-12 bg-white rounded-full p-4 hover:bg-white/60 ease-in duration-200"
          title="Link para o whatsapp da clínica"
        >
          <Whatsapp />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Nossos contatos</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a
            href="https://wa.me/5511911050123?text=Olá,%20vim%20pelo%20site%20e%20quero%20marcar%20uma%20consulta!"
            target="_blank"
            className="gap-2"
          >
            <Whatsapp width={16} height={16} />
            Clinica Paulista
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a className="gap-2" href="">
            <Whatsapp width={16} height={16} />
            Clinica Pinheiros
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
