import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import Container from "@/shared/Container/ui/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food boutique",
  description: "Food boutique website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <TheHeader />
          <div className="mx-auto">{children}</div>
        </Container>
        <TheFooter />
      </body>
    </html>
  );
}
