import { Rubik_Dirt } from "next/font/google";

const inter = Rubik_Dirt({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Wallet",
  description: "add money,see history",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
