import { Roboto_Flex } from "next/font/google";

const inter = Roboto_Flex({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "my-account",
  description: "This page contains my profile",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
