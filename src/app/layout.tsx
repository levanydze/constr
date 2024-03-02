import type { Metadata } from "next";
import { Oswald, Inter, Gabriela, Great_Vibes } from "next/font/google";
import "./globalLevani.css";
import "./globals.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Header2 from "../../components/header2/Header2";
import Footer2 from "../../components/Footer2/Footer";
import Heder3 from "../../components/header3/Header3";

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
  metadataBase: new URL("https://constr-rouge.vercel.app/"),
  title: {
    // if i write absolute title it will ignore template title
    // absolute: "",
    default: "Some default title for any page",
    //  instead of that  --> %s <--  i can write title on any page.  what i write after --> | <-- it will be weiten after title
    template: "%s | ChaCha Construction AB",
  },
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
        {/* <Heder3 /> */}
        {children}
        <Footer2 />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
