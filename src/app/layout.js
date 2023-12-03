import {Inter, Roboto} from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const inter = {
  subsets: ["latin"],
  variable: "--inter",
};

const roboto = {
  subsets: ["latin"],
  variable: "--roboto",
  weight: ["100", "300", "400", "500", "700"],
};

export const metadata = {
  title: "Erex Software",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={(inter.variable, roboto.variable)}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
