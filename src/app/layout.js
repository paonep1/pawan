import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"], display: 'swap', });

export const metadata = {
  title: "Pawan Maurya || React Devloper",
  description: `Experienced React Developer skilled in building dynamic and responsive
  web interfaces. Proficient in React, state management, and API
  integration. Strong focus on code quality, testing, and performance.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar logoText="{ PawanMaurya }" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
