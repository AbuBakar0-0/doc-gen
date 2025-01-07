import { FormDataProvider } from "@/context/FormDataContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Doc Profiler",
  description: "A document generator for BCS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FormDataProvider>
          <Toaster position="top-center" />
          {children}
        </FormDataProvider>
      </body>
    </html>
  );
}
