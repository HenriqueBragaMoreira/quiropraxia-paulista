import { ButtonToTop } from '@/components/buttonToTop';
import { Footer } from '@/components/footer';
import { FirstContent } from './components/firstContent';
import { FourthContent } from './components/fourthContent';
import { SecondContent } from './components/secondContent';
import { ThirdContent } from './components/thirdContent';

export default function Home() {
  return (
    <div>
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
      <ButtonToTop />
      {/* <WhatsappButton /> */}
      <Footer />
    </div>
  );
}
