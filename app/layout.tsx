import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Room from "./Room";
import { TooltipProvider } from "@/components/ui/tooltip";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Figman - useful Figma clone",
  description: "A minimalist clone of Figma, designed to help you create beautiful user interfaces without the clutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <Room>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        </Room>
      </body>
    </html>
  );
}
