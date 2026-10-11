import "../styles/global.css";
import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { profile } from "@/data/portfolio";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const title = `${profile.name} — ${profile.role}`;
const description = `${profile.bio.split("\n\n")[0]} Based in ${profile.location}.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: ["Vikram Negi", "Full-Stack Engineer", "Software Developer", "Flutter Developer", "React Developer", "Node.js", "Full Stack Developer", "System Design", "Backend Architecture"],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
