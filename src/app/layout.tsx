import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/lib/fonts";

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
      <body className={`${geistSans.variable}`}>{children}</body>
    </html>
  );
}
