import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Potter LP"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
