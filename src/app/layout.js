// "use client"
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   const pathname = usePathname();

//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" type="image/png" href="/assets/favicon.png" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <AnimatePresence mode="wait" initial={false}>
//           <div key={pathname}>
//             {children}
//           </div>
//         </AnimatePresence>
//       </body>
//     </html>
//   );
// }

// app/layout.js — SERVER COMPONENT (no "use client" here)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimateLayout from "./components/AnimateLayout";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export const metadata = {
  title: "Delish",
  description: "",
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* AnimateLayout is a client component — handles AnimatePresence + Bootstrap JS */}
        <AnimateLayout>{children}</AnimateLayout>
      </body>
    </html>
  );
}