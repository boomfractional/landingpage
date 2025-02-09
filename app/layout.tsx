import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Boom - AI for Real Estate Developers",
  description:
    "Boom simplifies real estate project management and investor relations with AI and blockchain. Manage projects, vendors, and transactions while keeping investors informed—all in one platform.",
  openGraph: {
    title: "Boom - AI for Real Estate Developers",
    description:
      "Boom simplifies real estate project management and investor relations with AI and blockchain. Manage projects, vendors, and transactions while keeping investors informed—all in one platform.",
    images: [
      "https://framerusercontent.com/images/MjvOZpMUCGclrcZvHLangVwTSU.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0b0e0f]`}>{children}</body>
    </html>
  );
}
