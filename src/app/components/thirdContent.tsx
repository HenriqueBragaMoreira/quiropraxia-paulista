import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { testimonials } from '@/utils/testimonials';

export function ThirdContent() {
  return (
    <div id="third-content" className="2xl:h-screen pt-20 md:pt-[88px]">
      <div className="flex flex-col gap-10 px-3 md:px-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center">Nossos Tratamentos</h2>
          <div className="flex flex-col gap-10 xs:grid xs:grid-cols-2 md:flex md:gap-0 md:flex-row md:justify-between items-center md:w-full xs:justify-items-center">
            <div className="h-64 w-52 lg:h-72 lg:w-64 bg-gray-500 rounded-lg shadow-2xl" />
            <div className="h-64 w-52 lg:h-72 lg:w-64 bg-gray-500 rounded-lg shadow-2xl" />
            <div className="h-64 w-52 lg:h-72 lg:w-64 bg-gray-500 rounded-lg shadow-2xl" />
            <div className="h-64 w-52 lg:h-72 lg:w-64 bg-gray-500 rounded-lg shadow-2xl" />
          </div>
        </div>
        <div className="flex flex-col w-full gap-6 items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center">Feedback dos Pacientes</h2>
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
