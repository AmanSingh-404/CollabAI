import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CollabAI Docs — Real-time collaborative workspace with AI",
  description:
    "CRDT-powered real-time collaboration meets contextual AI. Write together, think smarter. Free for teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}