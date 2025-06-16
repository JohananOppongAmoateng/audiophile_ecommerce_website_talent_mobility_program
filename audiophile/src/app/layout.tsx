import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { CartProvider } from "@/contexts/CartContext";

const ManropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "A modern e-commerce platform for audiophiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${ManropeFont.variable} ${ManropeFont.variable} antialiased`}
      >
        <Provider>
          <CartProvider>{children}</CartProvider>
        </Provider>
      </body>
    </html>
  );
}
