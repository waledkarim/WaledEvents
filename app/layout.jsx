import Header from "@components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: [ "100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "WaledEvents",
  description: "An event management system created by Waled Karim for Aamarpay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
