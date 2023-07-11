import "./globals.css";
import { Fredericka_the_Great, Roboto } from "next/font/google";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Sharon's Grocery App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-[640px] bg-[#f9f9f9] text-base text-black">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
