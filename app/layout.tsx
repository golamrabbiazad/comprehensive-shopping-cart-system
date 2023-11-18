import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartContextProvider } from "@/context/cart-context";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping Cart App",
  description: "A comprehensive shopping cart system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CartContextProvider>
        <html lang="en">
          <body className={`${inter.className}`}>
            <Navbar />
            <main className="bg-base-200">{children}</main>
            <Footer />
          </body>
        </html>
      </CartContextProvider>
    </ClerkProvider>
  );
}
