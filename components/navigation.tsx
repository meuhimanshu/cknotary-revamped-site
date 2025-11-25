"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("/");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setActiveLink(window.location.pathname); // Set active link on mount/path change
      setScrolled(window.scrollY > 20);
    };
    handleScroll(); // Set initial active link
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/estate-planning", label: "Estate Planning" },
    { href: "/real-estate", label: "Real Estate" },
    { href: "/notaries-public", label: "Notaries" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Fixed Top Bar with Logo, Navigation, and Actions */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/cklogo.png"
                alt="Chelsea Kramer Notary Corporation"
                width={180}
                height={54}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation Links - Show when not scrolled */}
            {!scrolled && (
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-colors rounded-full",
                      "hover:text-primary",
                      activeLink === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {activeLink === link.href && (
                      <motion.span
                        layoutId="navbar-pill"
                        className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Phone Number - Desktop/Tablet */}
              <Button
                asChild
                className={cn(
                  "hidden sm:flex rounded-full shadow-md hover:shadow-lg transition-all",
                  "bg-[#D4AF37] hover:bg-[#B8941F] text-primary"
                )}
                size="sm"
              >
                <a href="tel:250-542-1111" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="hidden lg:inline">250-542-1111</span>
                  <span className="lg:hidden">Call</span>
                </a>
              </Button>

              {/* Facebook Icon - Show when not scrolled on desktop */}
              {!scrolled && (
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hidden lg:flex"
                >
                  <a
                    href="https://www.facebook.com/CKNotary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
              )}

              {/* Theme Toggle - Show when not scrolled on desktop */}
              {!scrolled && (
                <div className="hidden lg:block">
                  <ThemeToggle />
                </div>
              )}

              {/* Facebook Icon - Mobile/Tablet Only */}
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="lg:hidden"
              >
                <a
                  href="https://www.facebook.com/CKNotary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>

              {/* Theme Toggle - Mobile/Tablet Only */}
              <div className="lg:hidden">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Pill-Shaped Navigation - Desktop Only - Shows when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "hidden lg:flex fixed top-20 left-1/2 -translate-x-1/2 z-40",
              "items-center gap-2 px-4 py-2 rounded-full",
              "bg-background/80 backdrop-blur-xl border border-border/50",
              "shadow-xl"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                  "hover:text-primary",
                  activeLink === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {activeLink === link.href && (
                  <motion.span
                    layoutId="floating-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.label}
              </Link>
            ))}
            
            {/* Divider */}
            <div className="h-6 w-px bg-border mx-1" />
            
            {/* Facebook Icon */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-9 w-9"
            >
              <a
                href="https://www.facebook.com/CKNotary/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-lg"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="relative flex flex-col items-center justify-center min-h-screen p-8"
            >
              <nav className="flex flex-col items-center space-y-6 w-full max-w-sm">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block w-full text-center text-2xl font-medium py-4 px-6 rounded-2xl",
                        "transition-all hover:bg-primary/10 hover:text-primary",
                        "border border-transparent hover:border-border"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col gap-4 w-full mt-8"
                >
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-full bg-[#D4AF37] hover:bg-[#B8941F] text-primary shadow-lg"
                  >
                    <a href="tel:250-542-1111" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      250-542-1111
                    </a>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


