import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './main.css';
import { Toaster } from "react-hot-toast";
import { Mogra } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

const mogra = Mogra({ weight: '400', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: "Belina Island",
  description: "Belinals galery $BELLSCOIN",
  icons: {
    icon: '/img/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mogra.className}> 
      <body className="text-sm lg:text-lg" data-theme="">
        <Toaster />
        {children}
      </body>
      <GoogleAnalytics gaId="G-CB382K1DE9" />
    </html>
  );
}
