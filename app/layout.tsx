import NavbarWithDrawer from "@/UI/NavbarWithDrawer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LIMS",
  description: "Site LIMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={inter.className}>
        <NavbarWithDrawer />
        {children}
      </body>
    </html>
  );
}
