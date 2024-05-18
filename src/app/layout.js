import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import FixedIcon from "@/components/fixedIcon/FixedIcon";
import BottomNav from "@/components/bottomnav/BottomNav";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ROYAL SPICE RESTAURANT",
  description: "ROYAL SPICE RESTAURANT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}
          <Footer />
        </TransitionProvider>

      </body>
    </html>
  );
}
