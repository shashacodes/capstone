import { Rubik } from "next/font/google";

const inter = Rubik({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Deals",
  description: "This page contains the discount deals",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
