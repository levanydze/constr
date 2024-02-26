import type { Metadata } from "next";
import { Oswald, Inter, Gabriela } from "next/font/google";
import "./globalLevani.css";
import "./globals.css";
import "./globalText.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font3",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font2",
});
const gabriela = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font1",
});

export const metadata: Metadata = {
  title: "ChaCha Construction",
  description: "We Buid Your Dreams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gabriela.variable} ${oswald.className} ${inter.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
