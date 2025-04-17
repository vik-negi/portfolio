// layout.tsx
import "../styles/global.css";
import dynamic from "next/dynamic";

// export const metadata: Metadata = {
//   title: "M37Labs AI",
//   description:
//     "Implement Innovative Next-Gen AI Frameworks Embed Augmented Growth Intelligence to accelerate revenues",
//   openGraph: {
//     type: "website",
//     url: "https://www.m37labs.com/",
//     title: "M37Labs AI",
//     description:
//       "Implement Innovative Next-Gen AI Frameworks Embed Augmented Growth Intelligence to accelerate revenues",
//     images: [
//       {
//         url: "/images/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "M37Labs Logo",
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.m37labs.com/" />
      </head>
      <body>{children}</body>
    </html>
  );
}
