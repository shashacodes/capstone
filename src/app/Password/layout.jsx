import { Rubik } from "next/font/google";

const inter = Rubik({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Password",
  description: "This page allows you change your password",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
