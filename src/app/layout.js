import "./globals.css";

export const metadata = {
  title: "Doc Profiler",
  description: "A document generator for BCS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
