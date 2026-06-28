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
import ReduxProvider from "@/redux/ReduxProvider";
import { Toaster } from "react-hot-toast";
 
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

        <AnimateLayout>
            <ReduxProvider>
          {children}
           <Toaster
    position="top-right"
    toastOptions={{
      duration: 3000,
      style: {
        background: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "16px 20px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
      },
    }}
  />
          </ReduxProvider>
          </AnimateLayout>
      </body>
    </html>
  );
}