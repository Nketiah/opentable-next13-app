import { ReactNode } from "react";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Open Table Clone",
  description: "Generated by create next app",
};

// Jfkk5DC35mBU4ABD

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
         <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
          <NavBar/>
        {children}
        </main>
        </main>
        </body>
    </html>
  );
}
