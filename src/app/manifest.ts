import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Parab Mishra \u2014 Full Stack Developer & Systems Builder",
    short_name: "Parab Mishra",
    description:
      "Full-stack developer specializing in event-driven backend systems and scalable architecture.",
    start_url: "/",
    display: "standalone",
    background_color: "#05060a",
    theme_color: "#05060a",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
