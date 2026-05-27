"use client";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimateLayout({ children }) {
  const pathname = usePathname();

  // Bootstrap JS — client only
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname}>
        {children}
      </div>
    </AnimatePresence>
  );
}