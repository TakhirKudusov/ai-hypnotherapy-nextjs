import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export { montserrat, spaceGrotesk };
