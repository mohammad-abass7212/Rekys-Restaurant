import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricky's Restaurant | Eat What Makes You Happy",
  description:
    "One of the finest restaurants in Dubai. Experience the best combination of spices with our professional catering and dine-in services.",
  keywords: "restaurant Dubai, catering Dubai, Rickys restaurant, Arabic food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
