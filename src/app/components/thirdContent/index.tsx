import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { testimonials } from '@/utils/testimonials';
import { WhileBlockInViewAnimation, WhileInViewAnimation } from './animation';

export function ThirdContent() {
  return (
    <div id="third-content" className="3xl:h-screen pt-20 md:pt-[88px]">
      <div className="flex flex-col gap-10 px-3 md:px-10">
        <div className="space-y-6">
          <WhileInViewAnimation>
            <h2 className="text-3xl md:text-5xl font-bold text-center">Nossos Tratamentos</h2>
          </WhileInViewAnimation>
          <WhileBlockInViewAnimation>
            <div className="h-64 w-52 lg:h-72 lg:w-64 bg-gray-500 rounded-lg shadow-2xl" />
            <div className="h-64 w-52 lg:h-72 lg:w-64 bg-gray-500 rounded-lg shadow-2xl" />
            <div className="h-64 w-52 lg:h-72 lg:w-64 bg-gray-500 rounded-lg shadow-2xl" />
            <div className="h-64 w-52 lg:h-72 lg:w-64 bg-gray-500 rounded-lg shadow-2xl" />
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
