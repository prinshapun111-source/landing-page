import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Idea | Free AI Marketing Consultation",
  description: "Get a customized AI marketing plan for your business in a free one-to-one consultation.",
  openGraph: { title: "Free AI Marketing Consultation | Smart Idea", description: "Discover practical ways AI can help generate more leads and sales." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
