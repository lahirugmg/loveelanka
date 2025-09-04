import type { Metadata } from 'next';
import './globals.css';
import { Lora, Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'Lovee Lanka',
  description: 'Handmade Crafts & Lifestyle Inspiration – From Sri Lanka to the World',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

