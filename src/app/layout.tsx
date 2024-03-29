import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Devanagari, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

//const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({subsets: ["latin-ext"], weight: "300"})

export const metadata: Metadata = {
  title: "Davi S.D | Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={poppins.className} lang="en">
      <body className={`bg-gray`}>
        <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
