import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./(components)/Navbar/Navbar";
import Sidebar from "./(components)/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex flex-row justify-between w-[100%]">
          <Sidebar />
          <div className="w-[60%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
