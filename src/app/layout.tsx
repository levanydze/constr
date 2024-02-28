import type { Metadata } from "next";
import { Oswald, Inter, Gabriela, Great_Vibes } from "next/font/google";
import "./globalLevani.css";
import "./globals.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Header2 from "../../components/header2/Header2";
import Footer2 from "../../components/Footer2/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font1",
  weight: ["200", "300", "400", "500", "600", "700"],
});
const gabriela = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font2",
});

const great = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font3",
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
        className={`${gabriela.variable} ${oswald.className} ${inter.variable} ${great.variable}`}
      >
        <Header />
        {/* <Header2 /> */}
        {children}
        <Footer2 />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
