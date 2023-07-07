import { Roboto_Flex } from "next/font/google";

const inter = Roboto_Flex({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Offers",
  description: "what sharon's grocery app offers",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
