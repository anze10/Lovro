import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Providers from "./providers";
import { Libre_Franklin } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import 'src/styles/style.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
});
const cormorant_garamond = Cormorant_Garamond({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
