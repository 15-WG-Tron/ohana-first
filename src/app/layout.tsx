import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ohana First",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" className={GeistSans.className}>
        <body className="text-light-text dark:bg-dark-bg dark:text-dark-text">
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
