import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export { montserrat, spaceGrotesk };
