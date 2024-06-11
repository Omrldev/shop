import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar Ledesma | Front-End Developer",
  description: "Modern store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={`${rubik.className} relative`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
