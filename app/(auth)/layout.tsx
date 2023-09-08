// This will allow much simpler and quicker SEO

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads Application",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children, // give prop
}: {
  children: React.ReactNode; //type of prop
}) {
  //returns layout
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          {/* everything that will be shown within this layout*/}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
