import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Spacelyt | From Blueprint to Beautiful Spaces",
  description:
    "Planning, architecture, construction, interiors, exteriors, and building solutions delivered as one seamless turnkey experience."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable}`}>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      ) : null}
    </html>
  );
}
