import { WhileImageInViewAnimation, WhileInViewAnimation } from '@/components/animation';

export function SecondContent() {
  return (
    <div
      id="second-content"
      className="3xl:h-screen mt-20 pt-20 md:mt-0 md:pt-[88px] bg-[#00667F]/20"
    >
      <div className="flex flex-col items-center gap-2 md:gap-8 px-3 md:px-10 py-6">
        <WhileInViewAnimation>
          <h2 className="text-3xl md:text-5xl font-bold">Quem Somos</h2>
        </WhileInViewAnimation>
        <WhileInViewAnimation>
          <div className="flex flex-col gap-4 text-sm md:text-lg text-center">
            <span>
              Na Quiropraxia Paulista focamos em tratar disfunções da coluna e articulações, nosso
              objetivo é otimizar o funcionamento do corpo para melhor qualidade de vida.
            </span>
            <span>
              Somos uma das maiores redes de clínicas de Quiropraxia em SP, oferecendo tratamento
              acessível e centrado no paciente, nossa abordagem única visa alívio da dor e cuidados
              preventivos.
            </span>
            <span>
              Como uma empresa familiar, nos dedicamos à saúde e qualidade de vida dos pacientes,
              proporcionando excelência e cuidado personalizado.
            </span>
            <span>Venha descobrir uma nova forma de viver sem dor conosco. 😉</span>
          </div>
        </WhileInViewAnimation>
        <WhileImageInViewAnimation>
          <div className="h-64 w-56 md:h-72 md:w-[232px] lg:h-96 lg:w-80 bg-gray-500 rounded-lg shadow-2xl" />
          <div className="h-64 w-56 md:h-72 md:w-[232px] lg:h-96 lg:w-80 bg-gray-500 rounded-lg shadow-2xl" />
          <div className="h-64 w-56 md:h-72 md:w-[232px] lg:h-96 lg:w-80 bg-gray-500 rounded-lg shadow-2xl" />
        </WhileImageInViewAnimation>
      </div>
    </div>
  );
}
