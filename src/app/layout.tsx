import type { Metadata } from "next";
import Global from "@/styles/global";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "AI-гипнотерапевт",
  description: "Ваш интеллектуальный помощник",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <StyledComponentsRegistry>
          <Global />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
