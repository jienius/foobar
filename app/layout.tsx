import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";
import Head from "next/head";
import { AuthContext, AuthContextProvider } from "@/context/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Royal Regal",
  description: "Royal Regal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </ AuthContextProvider>
    </html>
  );
}
