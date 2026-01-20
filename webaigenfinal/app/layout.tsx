import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebAI Gen | AI + Web Services",
  description: "AI automation and modern web services for businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
