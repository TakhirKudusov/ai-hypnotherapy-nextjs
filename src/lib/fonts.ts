import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export { montserrat, spaceGrotesk };
