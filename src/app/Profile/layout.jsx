import { Roboto } from "next/font/google";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Profile",
  description: "This is the user's profile page",
};

export default function layout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
