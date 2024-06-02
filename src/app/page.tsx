import { ButtonToTop } from '@/components/buttonToTop';
import { Footer } from '@/components/footer';
import { WhatsappButton } from '@/components/whatsappButton';
import { FifthContent } from './components/fifthContent';
import { FirstContent } from './components/firstContent';
import { SecondContent } from './components/secondContent';
import { ThirdContent } from './components/thirdContent';

export default function Home() {
  return (
    <div>
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      {/* <FourthContent /> */}
      <FifthContent />
      <ButtonToTop />
      <WhatsappButton />
      <Footer />
    </div>
  );
}
