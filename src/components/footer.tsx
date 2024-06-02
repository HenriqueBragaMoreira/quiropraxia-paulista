import { routes } from '@/utils/routes';
import Link from 'next/link';
import { Logo } from './icon/logo';

export function Footer() {
  return (
    <footer className="flex flex-col bg-[#1F1F1F] py-4 px-8">
      <div className="flex flex-col lg:flex-row justify-between border-b pb-5 items-center">
        <div className="max-w-[30rem] lg:max-w-[32rem]">
          <h1 className="text-xl font-bold">Benefícios da Quiropraxia</h1>
          <span className="text-gray-300">
            A quiropraxia alivia dores na coluna e melhora a postura através de ajustes manuais,
            promovendo saúde e bem-estar.
          </span>
        </div>
        <div className="max-w-[30rem]">
          <h1 className="text-xl font-bold">Alívio de Dor com Quiropraxia</h1>
          <span className="text-gray-300">
            A quiropraxia oferece alívio eficaz de dores nas costas e pescoço sem uso de
            medicamentos.
          </span>
        </div>
        <div className="max-w-[30rem]">
          <h1 className="text-xl font-bold">Quiropraxia para Melhor Qualidade de Vida</h1>
          <span className="text-gray-300">
            A quiropraxia previne problemas na coluna e melhora a mobilidade, aumentando a qualidade
            de vida.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row items-center justify-between pt-5">
        <Logo className="w-[200px]" />
        <div className="flex flex-col items-center">
          <span className="text-gray-200 text-xs">
            Copyright © 2019-2024 Quiropraxia Paulista.
          </span>
          <span className="text-gray-200 text-xs">Todos os direitos reservados.</span>
        </div>
        <div className="flex flex-col xs:flex-row items-center gap-8">
          {routes.map((item) => (
            <Link
              className="font-medium hover:text-[#00667F] hover:underline duration-300"
              key={item.id}
              href={item.reference}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
