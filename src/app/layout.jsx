import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/controllers/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Door",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container ">
          <Headers />
          {children}
        </div>
      </body>
    </html>
  );
}