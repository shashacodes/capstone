import { Roboto_Flex } from "next/font/google";

const inter = Roboto_Flex({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "add-money",
  description: "This page allows you add money to your wallet",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
