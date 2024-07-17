import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quiropraxia Paulista',
  description:
    'A Quiropraxia Paulista é uma clínica especializada em tratar disfunções da coluna e outras articulações sendo físicas, neurológicas ou fisiológicas.',
  keywords:
    'clínica de quiropraxia, tratamento quiroprático, quiropraxia, ajuste quiroprático, saúde da coluna, dor nas costas, dor no pescoço, dor lombar, dor nas articulações, quiropraxista, quiropraxista certificado, quiropraxia esportiva, cuidado quiroprático, terapia quiroprática, alívio da dor, reabilitação quiroprática, bem-estar, tratamento da coluna, quiropraxia para atletas, quiropraxia infantil, quiropraxia para idosos, prevenção de lesões, técnicas quiropráticas, saúde holística, tratamento não invasivo, melhoria postural, correção postural, cuidado da coluna, clínica de saúde, dor ciática, nervo ciático, dor crônica, tratamento da dor, quiropraxia preventiva, terapia manual, mobilidade articular, quiropraxia de emergência, alívio de tensão, saúde física, ajuste espinhal, técnicas de ajuste, reabilitação física, equilíbrio corporal',
  authors: {
    name: 'Henrique Braga',
    url: 'https://henriquebraga.vercel.app/pt',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N85CZ5H');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N85CZ5H"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
