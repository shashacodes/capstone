import { Roboto } from "next/font/google";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Popular-items",
  description: "This page displays popular items",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
