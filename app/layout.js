import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "./shared-components/Header";
import Footer from "./shared-components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure the font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Optional: for using with Tailwind CSS
});

export const metadata = {
  title: "Rafi Medical Center",
  description: "Rafi Medical Center - Your Health is Our Priority",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
