import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "../../components/Footer/Footer";
import TransitionProvider from "../../components/TransitionProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata = {
  title: "ROYAL SPICE RESTAURANT",
  description: "ROYAL SPICE RESTAURANT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className={outfit.className}>
        <TransitionProvider>{children}
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
