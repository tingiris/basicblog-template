import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import { Header } from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basic Blog",
  description:
    "A minimal Next.js markdown blog template with drafts and static generation.",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
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
        <Header />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
