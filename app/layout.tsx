import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Dhakate | Software Engineer",
  description:
    "Harsh Dhakate — Associate Software Engineer at Accenture. Android development professionally, with independent full-stack and AI application projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
