import { Inter } from 'next/font/google';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/configs/lib/css/style.css';
import Layout from '@/components/layout/Layout';
import PreLoader from '@/components/layout/Preloader';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: 'CongND blog',
  description: 'The best blog app!',
  icons: {
    icon: './favicon.ico',
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PreLoader />
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
