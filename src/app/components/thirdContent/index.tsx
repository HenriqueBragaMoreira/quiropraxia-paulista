import { FlippingCard } from '@/components/flipCard';
import { Button } from '@/components/ui/button';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { testimonials } from '@/utils/testimonials';
import { Check, ChevronLeft } from 'lucide-react';
import { WhileBlockInViewAnimation, WhileInViewAnimation } from './animation';

export function ThirdContent() {
  return (
    <div
      id="third-content"
      className="3xl:h-screen [@media(min-height:935px)]:h-screen pt-20 md:pt-[88px]"
    >
      <div className="flex flex-col gap-10 px-3 md:px-10">
        <div className="space-y-6">
          <WhileInViewAnimation>
            <h2 className="text-3xl md:text-5xl font-bold text-center">Nossos Tratamentos</h2>
          </WhileInViewAnimation>
          <WhileBlockInViewAnimation>
            <FlippingCard
              frontContent={
                <div className="flex flex-col justify-between h-64 w-52 lg:h-72 lg:w-64 bg-[#154359] rounded-lg shadow-2xl py-6 px-5 border-[4px] border-white">
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-center">5</h2>
                      <span className="font-semibold">Sessões</span>
                    </div>
                    <span className="text-xs lg:text-sm">
                      Comece com nosso pacote introdutório de Quiropraxia e experimente os
                      benefícios de ajustes regulares.
                    </span>
                  </div>
                  <Button className="bg-white text-black hover:bg-white/80">
                    Mais informações
                  </Button>
                </div>
              }
              backContent={
                <div className="flex flex-col gap-2 lg:gap-4 h-full w-full bg-[#154359] rounded-lg shadow-2xl py-6 px-5 border-[4px] border-white">
                  <div className="flex justify-between w-full">
                    <ChevronLeft name="Icone para voltar" className="cursor-pointer" />
                    <span>Preços</span>
                    <div />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">Avaliação Gratuita!</span>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">Tratamento Personlizado!</span>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">5 sessões de quiropraxia!</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center lg:gap-2 mt-1 lg:mt-3">
                    <span className="lg:text-xl font-semibold">R$760,00 á vista</span>
                    <span>ou</span>
                    <span>4x de R$200,00</span>
                  </div>
                </div>
              }
            />

            <FlippingCard
              frontContent={
                <div className="flex flex-col justify-between h-64 w-52 lg:h-72 lg:w-64 bg-[#154359] rounded-lg shadow-2xl py-6 px-5 border-[4px] border-white">
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-center">10</h2>
                      <span className="font-semibold">Sessões</span>
                    </div>
                    <span className="text-xs lg:text-sm">
                      Mantenha a saúde da coluna e o bem-estar geral com nosso pacote abrangente de
                      10 sessões.
                    </span>
                  </div>
                  <Button className="bg-white text-black hover:bg-white/80">
                    Mais informações
                  </Button>
                </div>
              }
              backContent={
                <div className="flex flex-col gap-2 lg:gap-4 h-full w-full bg-[#154359] rounded-lg shadow-2xl py-6 px-5 border-[4px] border-white">
                  <div className="flex justify-between w-full">
                    <ChevronLeft name="Icone para voltar" className="cursor-pointer" />
                    <span>Preços</span>
                    <div />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">Avaliação Gratuita!</span>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">Tratamento Personlizado!</span>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">10 sessões de quiropraxia!</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center lg:gap-2 mt-1 lg:mt-3">
                    <span className="lg:text-xl font-semibold">R$1.425,00 á vista</span>
                    <span>ou</span>
                    <span>6x de R$250,00</span>
                  </div>
                </div>
              }
            />
            <FlippingCard
              frontContent={
                <div className="flex flex-col justify-between h-64 w-52 lg:h-72 lg:w-64 bg-[#154359] rounded-lg shadow-2xl py-6 px-5 border-[4px] border-white">
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-center">15</h2>
                      <span className="font-semibold">Sessões</span>
                    </div>
                    <span className="text-xs lg:text-sm">
                      Obtenha alívio da dor a longo prazo e melhor mobilidade com nosso plano
                      avançado de quiropraxia de 15 sessões.
                    </span>
                  </div>
                  <Button className="bg-white text-black hover:bg-white/80">
                    Mais informações
                  </Button>
                </div>
              }
              backContent={
                <div className="flex flex-col gap-2 lg:gap-4 h-full w-full bg-[#154359] rounded-lg shadow-2xl py-6 px-5 border-[4px] border-white">
                  <div className="flex justify-between w-full">
                    <ChevronLeft name="Icone para voltar" className="cursor-pointer" />
                    <span>Preços</span>
                    <div />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">Avaliação Gratuita!</span>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">Tratamento Personlizado!</span>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">15 sessões de quiropraxia!</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center lg:gap-2 mt-1 lg:mt-3">
                    <span className="lg:text-xl font-semibold">R$1.995,00 á vista</span>
                    <span>ou</span>
                    <span>6x de R$350,00</span>
                  </div>
                </div>
              }
            />
            <FlippingCard
              frontContent={
                <div className="flex flex-col justify-between h-64 w-52 lg:h-72 lg:w-64 bg-[#154359] rounded-lg shadow-2xl py-6 px-5 border-[4px] border-white">
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-center">20</h2>
                      <span className="font-semibold">Sessões</span>
                    </div>
                    <span className="text-xs lg:text-sm">
                      Invista na sua saúde a longo prazo com nosso pacote abrangente de quiropraxia
                      de 20 sessões.
                    </span>
                  </div>
                  <Button className="bg-white text-black hover:bg-white/80">
                    Mais informações
                  </Button>
                </div>
              }
              backContent={
                <div className="flex flex-col gap-2 lg:gap-4 h-full w-full bg-[#154359] rounded-lg shadow-2xl py-6 px-5 border-[4px] border-white">
                  <div className="flex justify-between w-full">
                    <ChevronLeft name="Icone para voltar" className="cursor-pointer" />
                    <span>Preços</span>
                    <div />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">Avaliação Gratuita!</span>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">Tratamento Personlizado!</span>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                      <Check size={18} />
                      <span className="text-xs">20 sessões de quiropraxia!</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center lg:gap-2 mt-1 lg:mt-3">
                    <span className="lg:text-xl font-semibold">R$2.470,00 á vista</span>
                    <span>ou</span>
                    <span>6x de R$433,33</span>
                  </div>
                </div>
              }
            />
          </WhileBlockInViewAnimation>
        </div>
        <div className="flex flex-col w-full gap-6 items-center">
          <WhileInViewAnimation>
            <h2 className="text-3xl md:text-5xl font-bold text-center">Feedback dos Pacientes</h2>
          </WhileInViewAnimation>
          <InfiniteMovingCards
            className="w-full"
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
