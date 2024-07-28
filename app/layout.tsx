import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foo Bar",
  description: "Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
