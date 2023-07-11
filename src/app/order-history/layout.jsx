import { Rubik } from "next/font/google";

const inter = Rubik({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Order-history",
  description: "This page tracks your orders",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
