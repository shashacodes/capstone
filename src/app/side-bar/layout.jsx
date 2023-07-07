import { Rubik_Dirt } from "next/font/google";

const inter = Rubik_Dirt({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "side-bar",
  description: "the menu bar, contains links to some information",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
