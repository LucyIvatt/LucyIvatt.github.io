import type { Metadata } from "next";
import "../styles/globals.css";
import { GeistSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Lucy Ivatt's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable}`}>{children}</body>
    </html>
  );
}
