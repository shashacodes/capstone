import { Roboto_Flex } from "next/font/google";

const inter = Roboto_Flex({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Help centre",
  description: "This page contacts the help center",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
