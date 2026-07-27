import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://parabmishra.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Parab Mishra \u2014 Full Stack Developer & Systems Builder",
    template: "%s \u00b7 Parab Mishra",
  },
  description:
    "Parab Mishra is a full-stack developer specializing in event-driven backend systems, scalable architecture and production-grade MERN applications.",
  keywords: [
    "Parab Mishra",
    "Full Stack Developer",
    "Backend Engineer",
    "Node.js",
    "Nest.js",
    "React",
    "System Design",
    "Kafka",
    "Portfolio",
  ],
  authors: [{ name: "Parab Mishra" }],
  creator: "Parab Mishra",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Parab Mishra \u2014 Full Stack Developer & Systems Builder",
    description:
      "Full-stack developer specializing in event-driven backend systems, scalable architecture and production-grade MERN applications.",
    siteName: "Parab Mishra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parab Mishra \u2014 Full Stack Developer & Systems Builder",
    description:
      "Full-stack developer specializing in event-driven backend systems, scalable architecture and production-grade MERN applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070d" },
    { media: "(prefers-color-scheme: light)", color: "#f5f6fa" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
