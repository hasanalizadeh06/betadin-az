import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin-ext", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700"],
});


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
