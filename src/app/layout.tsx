import '@/styles/globals.css';
import { twMerge } from 'tailwind-merge';
import { Providers } from '@/components/providers';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { Navbar } from '@/components/Navbar';

const fontSans = FontSans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nextjs Tailwindcss Starter',
  description: 'Generated for personal use - @indrazm',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge(fontSans.className)}>
        <main className="h-screen flex flex-col justify-center items-center">
          <Navbar />
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
