import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desa Dirgahayu",
  description: "Profil Desa Dirgahayu Kecamatan Kadipaten Kabupaten Tasikmalaya",
  icons: {
    icon: "/LogoFix.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
