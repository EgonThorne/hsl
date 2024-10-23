"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import { ModeToggle } from "./dark/ModeToggle";
import { logo, headerNav } from "@/config/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <nav
        className="flex items-center justify-between p-3 lg:px-5 border border-b-black"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{logo.headerLogo.appName}</span>
            <Image
              src={logo.headerLogo.src}
              alt={logo.headerLogo.alt}
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open main menu</span>
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {headerNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-foreground hover:text-foreground/80"
            >
              <div className="relative px-[4px] py-[2px] group">
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-y-0 left-0 w-0 bg-green-400 group-hover:w-full transition-all duration-270 ease-out"></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ModeToggle />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="fixed inset-0 bg-background/80" />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: menuHeight }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-x-0 top-0 z-50 overflow-hidden bg-background"
              onClick={(e) => e.stopPropagation()}
            >
              <div ref={menuRef} className="p-6 overflow-y-auto max-h-screen">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">{logo.headerLogo.appName}</span>
                    <Image
                      src={logo.headerLogo.src}
                      alt={logo.headerLogo.alt}
                      width={32}
                      height={32}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="space-y-4">
                  {headerNav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className=" lg:flex lg:flex-1 lg:justify-end">
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              style={{ height: `calc(100% - ${menuHeight}px)` }}
              className="fixed inset-x-0 bottom-0 bg-background/80 backdrop-blur-md"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
