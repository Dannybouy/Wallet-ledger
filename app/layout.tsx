import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Public_Sans, Timmana } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"] });
const timmana = Timmana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-timmana",
});

export const metadata: Metadata = {
  title: "FinTrack - Wallet Ledger Dashboard",
  description:
    "A comprehensive wallet ledger dashboard for tracking financial transactions",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(publicSans.className, timmana.variable)}>
        {children}
      </body>
    </html>
  );
}
