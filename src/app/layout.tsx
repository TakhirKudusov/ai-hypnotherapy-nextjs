import type { Metadata } from "next";
import Global from "@/styles/global";
import StyledComponentsRegistry from "@/lib/registry";
import "react-toastify/dist/ReactToastify.css";
import { Flip, ToastContainer } from "react-toastify";
import ReduxProvider from "@/redux/reduxProvider";

export const metadata: Metadata = {
  title: "AI Hypno App",
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
        <ReduxProvider>
          <StyledComponentsRegistry>
            <Global />
            {children}
          </StyledComponentsRegistry>
          <ToastContainer
            transition={Flip}
            autoClose={5_000}
            position="top-right"
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            theme="light"
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
