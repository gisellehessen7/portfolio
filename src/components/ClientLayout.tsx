"use client";

import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
