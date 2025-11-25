"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || isAnimating) return;

    const newTheme = theme === "dark" ? "light" : "dark";
    setIsAnimating(true);

    // Get button position
    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate the distance to the farthest corner
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    ) * 2;

    // Check if View Transitions API is supported
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      // Use View Transitions API
      const transition = (document as any).startViewTransition(() => {
        setTheme(newTheme);
      });

      transition.ready.then(() => {
        // Create circle animation
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath,
          },
          {
            duration: 800,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      }).catch(() => {
        setIsAnimating(false);
      });

      transition.finished.finally(() => {
        setIsAnimating(false);
      });
    } else {
      // Fallback: Create circle blur element manually
      const circle = document.createElement("div");
      circle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 99999;
        background: ${newTheme === "dark" ? "#0a0a0a" : "#ffffff"};
        box-shadow: 0 0 100px 50px ${newTheme === "dark" ? "#0a0a0a" : "#ffffff"};
      `;

      document.body.appendChild(circle);

      // Force reflow
      circle.offsetHeight;

      // Apply transition
      circle.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      
      // Trigger animation on next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          circle.style.width = `${endRadius}px`;
          circle.style.height = `${endRadius}px`;
          circle.style.boxShadow = `0 0 200px 100px ${newTheme === "dark" ? "#0a0a0a" : "#ffffff"}`;
        });
      });

      // Change theme
      setTimeout(() => {
        setTheme(newTheme);
      }, 400);

      // Remove circle after animation
      setTimeout(() => {
        circle.remove();
        setIsAnimating(false);
      }, 850);
    }
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      className="h-9 w-9 relative overflow-visible"
      aria-label="Toggle theme"
      disabled={isAnimating}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 transition-all rotate-0 scale-100" />
      ) : (
        <Moon className="h-4 w-4 transition-all rotate-0 scale-100" />
      )}
    </Button>
  );
}

